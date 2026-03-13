const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    items: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, required: true }
      }
    ],
    paymentMethod: {
      type: String,
      enum: ["UPI", "Razorpay"],
      required: true
    },
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Pending", "Paid", "Packed", "Shipped"],
      default: "Pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.models.Order || mongoose.model("Order", orderSchema);
