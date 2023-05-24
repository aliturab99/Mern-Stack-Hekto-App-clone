const mongoose = require("mongoose");

mongoose.model('Store', {});

const storeSchema = new mongoose.Schema({
  storeName: {
    type: String,
    required: [true, "Store Name is required"],
    maxlength: 250
  },
  email: {
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
  phoneNumber: {
    type: String,
    maxlength: 20
  },
  address: {
    type: String,
  },
  logo: {
    type: String,
    maxlength: 100
  },
  tagline: {
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


const Store = mongoose.model("store", storeSchema);

module.exports = Store;