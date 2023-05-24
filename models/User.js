const moment = require("moment/moment");
const mongoose = require("mongoose");

mongoose.model('User', {});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
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
  phone_number: {
    type: String,
    maxlength: 20
  },
  profile_picture: {
    type: String,
    maxlength: 100
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    maxlength: 300
  },
  password_reset_code: {
    type: String,
    maxlength: 100
  },
  email_verification_code: {
    type: String,
    maxlength: 100
  },
  type: {
    type: Number,
    default: process.env.USER_TYPE_SUPERADMIN,
    required: [true, "User type is required"],
  },
  active: {
    type: Number,
    default: process.env.ACTIVE_STATUS
  },
  created_on: {
    type: Date,
    default: moment().format('YYYY-MM-DD')
  },
  modified_on: {
    type: Date,
    default: moment().format('YYYY-MM-DD')
  },

});

userSchema.set('toJSON', {
  getters: true,
  transform: (doc, ret, options) => {
    ret.created_on = moment(ret.created_on).format('YYYY-MM-DD');
    ret.modified_on = moment(ret.modified_on).format('YYYY-MM-DD');
    return ret;
  }
});

const User = mongoose.model("users", userSchema);

module.exports = User;