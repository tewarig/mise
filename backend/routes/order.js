const express = require("express");
const order = require("../model/order");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const orders = await order.find();
    res.json(orders);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const newOrder = new order(req.body);

  try {
    const final = await newOrder.save();
  } catch (error) {
    console.log(error);
  }
  res.send("data recevied");
});

module.exports = router;