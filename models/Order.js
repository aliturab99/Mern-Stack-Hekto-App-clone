const moment = require("moment/moment");
const mongoose = require("mongoose");

mongoose.model('Order', {});

const orderSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  appartment: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  postalCode : {
    type: Number
  },
  contactinfo : {
    type: String
  },
  products: {
    type: Array,
  },
  created_on: {
    type: Date,
    default: moment().format('YYYY-MM-DD')
  },

});

orderSchema.set('toJSON', {
  getters: true,
  transform: (doc, ret, options) => {
    ret.created_on = moment(ret.created_on).format('YYYY-MM-DD');
    ret.modified_on = moment(ret.modified_on).format('YYYY-MM-DD');
    return ret;
  }
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;