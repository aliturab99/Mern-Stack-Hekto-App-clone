const express = require("express");
const Order = require("../models/Order");
const { verifyuser } = require("../utils/middlewares");


const router = express.Router();
router.use(["/all"], verifyuser)


router.post("/new", async (req, res) => {
    console.log(req.body)
    try {
        if (!req.body.data.contact) throw new Error("Enter Contact Infomation")
        if (!req.body.data.lastName) throw new Error("Last Name is required")
        if (!req.body.data.city) throw new Error("City is required")
        if (!req.body.data.country) throw new Error("Country is required")
        if (!req.body.data.postalCode) throw new Error("Postal Code is required")

        const orderData = new Order({
            firstName: req.body.data.firstName,
            lastName: req.body.data.lastName,
            appartment: req.body.data.appartment,
            city: req.body.data.city,
            country: req.body.data.country,
            postalCode: req.body.data.postalCode,
            contactinfo: req.body.data.contactinfo,
            products: req.body.products
        })

        await orderData.save()
        res.json("Product Added Successfully")

    } catch (err) {
        res.status(400).json(err)
    }
})

router.get("/all", async (req, res) => {
    try {
        const skip = parseInt(req.query.skip ? req.query.skip : 0);
        const recordsPerPage = req.query.limit ? req.query.limit : process.env.RECORDS_PER_PAGE;
        const totalRecords = await Order.countDocuments();
        // const users = await User.find({}, null, { skip, limit: parseInt(recordsPerPage), sort: { created_on: -1 } });
        const orders = await Order.find({}, null, { skip, limit: parseInt(recordsPerPage) });
        res.status(200).json({orders, totalRecords});
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
})

router.post("/singleOrder", async (req, res) => {
    try {
        if(!req.body.id) throw new Error("Invalid Request")
        const order = await Order.findById(req.body.id)
        res.status(200).json({order});
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
})

module.exports = router;