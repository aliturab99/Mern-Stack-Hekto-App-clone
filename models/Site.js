const mongoose = require("mongoose");

mongoose.model('Site', {});

const siteSchema = new mongoose.Schema({
  siteName: {
    type: String,
    required: [true, "SIte Name is required"],
    maxlength: 250
  },
  siteEmail: {
    type: String,
    required: [true, "Email is required"],
    maxlength: 250,
    validate: {
      validator: async function(value) {
        const count = await mongoose.model('User').countDocuments({ email: value });
        return count === 0;
      },
      message: 'Email must be unique',
      type: 'unique'
    }
  },
  sitePhoneNumber: {
    type: String,
    maxlength: 20
  },
  siteAddress: {
    type: String,
  },
  siteLogo: {
    type: String,
    maxlength: 100
  },
  siteTagline: {
    type: String,
    maxlength: 300
  },
  facebookLink: {
    type: String,
    maxlength: 300
  },
  twitterLink: {
    type: String,
    maxlength: 300
  },
  instagramLink: {
    type: String,
    maxlength: 300
  }
  

});


const Site = mongoose.model("site", siteSchema);

module.exports = Site;