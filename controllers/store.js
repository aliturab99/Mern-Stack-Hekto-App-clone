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
      await fs.mkdir(`content/${req.user._id}/`, {recursive: true});
      cb(null, `content/${req.user._id}/` )
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
      storeName,
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
    storeName,
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
  // upload.single("siteLogo"),
  async (req, res
    ) => {
      try {
      const store = await Store.find();
      console.log(req.body)
      if (!store)
          throw new Error("Invalid Id");

          const {
            storeName,
            tagline,
            logo,
            address,
            email,
            phoneNumber,
            facebookLink,
            twitterLink,
            instagramLink
          } = req.body;

      const updatedStore = await Store.findByIdAndUpdate(req.body.id, {
        storeName,
        tagline,
        logo,
        address,
        email,
        phoneNumber,
        facebookLink,
        twitterLink,
        instagramLink
      });
      res.json({ store: updatedStore })

  } catch (err) {
    console.log("ahsdhjsagj")
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