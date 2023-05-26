const express = require("express");
const mongoose = require("mongoose");
const Store = require("../models/Store");
const verifyUser = require("../utils/middlewares");
const { isSuperAdmin, isAdmin } = require("../utils/utils");
const multer = require("multer")
const fs = require('fs').promises;
const path = require("path")


const router = express.Router();
// router.use(verifyUser)

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    try{
      await fs.mkdir(`content/store`, {recursive: true});
      cb(null, `content/store/` )
    }catch(err){
      cb(err, null)
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['jpg', "gif", "png", "bmp", 'jpeg']
    const ext = path.extname(file.originalname).replace(".", "")
    if(allowedTypes.includes(ext)){
      cb(null, true)
    }
    else{
      cb((new Error("File is Not Allowed")), false)      
    }      
  }
})


// Adding Categories
router.post("/add", async (req, res) => {
  const {
      siteName,
      tagline,
      logo,
      address,
      email,
      phoneNumber,
      facebookLink,
      twitterLink,
      instagramLink

  } = req.body;
try {

  const store = new Store({
    siteName,
    tagline,
    logo,
    address,
    email,
    phoneNumber,
    facebookLink,
    twitterLink,
    instagramLink
  })
  await store.save()
  res.status(200).json({store})
} catch (error) {
  res.status(400).json([error.message]);
}
});


// Editing Categories
router.post(
  "/edit",
  upload.single("siteLogo"),
  async (req, res
    ) => {
      try {
      const store = await Store.find();
      if (!store)
          throw new Error("Invalid Id");

          const record = {
            siteName: req.body.siteName,
            siteTagline: req.body.siteTagline,
            siteAddress: req.body.siteAddress,
            siteEmail: req.body.siteEmail,
            sitePhoneNumber: req.body.sitePhoneNumber,
            facebookLink: req.body.facebookLink,
            twitterLink: req.body.twitterLink,
            instagramLink: req.body.instagramLink
          }
          if(req.file && req.file.filename){
            record.logo = req.file.filename
          if(store.logo && store.logo !== req.file.filename){
            const oldPicPath = `content/store/${store.logo}`
            await fs.unlink(oldPicPath)
          }
          }

          let updatedStore = await Store.findOneAndUpdate(store._id, record)
          console.log(store)
          console.log(updatedStore)
      res.json({ store: updatedStore })

  } catch (err) {
      res.status(400).json({ error: err.message })
  }
})



router.get("/", async (req, res) => {
try {
  const store = await Store.find()
  res.status(200).json({store});
} catch (error) {
  res.status(400).json({ error: error.message });
}
});

module.exports = router;