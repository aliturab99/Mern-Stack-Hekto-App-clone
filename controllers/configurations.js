const express = require("express");
const mongoose = require("mongoose");
const Site = require("../models/Site");
const {verifyuser} = require("../utils/middlewares");
const { isSuperAdmin, isAdmin } = require("../utils/utils");
const multer = require("multer")
const fs = require('fs').promises;
const path = require("path")


const router = express.Router();
router.use(verifyuser)

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    try{
      await fs.mkdir(`content/site`, {recursive: true});
      cb(null, `content/site/` )
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
      siteTagline,
      siteLogo,
      siteAddress,
      siteEmail,
      sitePhoneNumber,
      facebookLink,
      twitterLink,
      instagramLink

  } = req.body;
try {

  const site = new Site({
    siteName,siteTagline,
    siteLogo,
    siteAddress,
    siteEmail,
    sitePhoneNumber,
    facebookLink,
    twitterLink,
    instagramLink
  })
  await site.save()
  res.status(200).json({site})
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
      const [site] = await Site.find();
      if (!site)
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
            record.siteLogo = req.file.filename

          if(site.siteLogo && site.siteLogo !== req.file.filename){
            const oldPicPath = `content/site/${site.siteLogo}`
            await fs.unlink(oldPicPath)
          }
          }

          let updatedSite = await Site.findOneAndUpdate(site._id, record)
      res.json({ site: updatedSite })

  } catch (err) {
      res.status(400).json({ error: err.message })
  }
})



router.get("/", async (req, res) => {
try {
  const [site] = await Site.find()
  res.status(200).json(site);
} catch (error) {
  res.status(400).json({ error: error.message });
}
});

module.exports = router;