const express = require("express");
const Razorpay = require("razorpay");
const Order = require("../models/Order");

const mockOrders = [
  {
    id: "ORD-1024",
    customer: "Neha Sharma",
    items: [
      { productId: "tb-001", quantity: 1 },
      { productId: "tb-002", quantity: 1 }
    ],
    total: 1048,
    status: "Paid"
  }
];

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }).lean();
    res.json(orders.length ? orders : mockOrders);
  } catch {
    res.json(mockOrders);
  }
});

router.post("/", async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: "Unable to create order", detail: error.message });
  }
});

router.post("/razorpay-order", async (req, res) => {
  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || "rzp_test_placeholder",
    key_secret: process.env.RAZORPAY_KEY_SECRET || "secret_placeholder"
  });

  try {
    const order = await instance.orders.create({
      amount: req.body.amount,
      currency: "INR",
      receipt: `receipt_${Date.now()}`
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: "Unable to create Razorpay order", detail: error.message });
  }
});

module.exports = router;
