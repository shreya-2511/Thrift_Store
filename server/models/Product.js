const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["image", "youtube", "video"],
      required: true
    },
    src: { type: String },
    alt: { type: String },
    embedUrl: { type: String },
    thumbnail: { type: String },
    title: { type: String }
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    collection: { type: String, required: true },
    stock: { type: Number, default: 0 },
    soldOut: { type: Boolean, default: false },
    imageUrl: { type: String },
    media: { type: [mediaSchema], default: [] }
  },
  { timestamps: true }
);

module.exports = mongoose.models.Product || mongoose.model("Product", productSchema);
