const express = require("express");
const Product = require("../models/Product");

const mockProducts = [
  {
    id: "tb-001",
    slug: "harry-hermione-keychain-set",
    name: "Harry & Hermione Keychain Set",
    price: 249,
    category: "Keychains",
    collection: "Harry Potter Collection",
    description: "Pair of metallic character keychains featuring Harry Potter and Hermione Granger with laser-etched details.",
    stock: 8,
    badge: "Best seller"
  },
  {
    id: "tb-002",
    slug: "hp-wand-set-4-characters",
    name: "HP Wand Set – 4 Characters",
    price: 649,
    category: "Wand pens",
    collection: "Harry Potter Collection",
    description: "Replica wand pen set for Harry, Hermione, Voldemort & Dumbledore. Finely detailed display-ready set.",
    stock: 5,
    badge: "Trending"
  },
  {
    id: "tb-003",
    slug: "hermione-granger-miniature-figure",
    name: "Hermione Granger Miniature Figure",
    price: 499,
    category: "Miniature figures",
    collection: "Harry Potter Collection",
    description: "Highly detailed Hermione Granger collectible miniature in Hogwarts robes — perfect for shelf display.",
    stock: 3,
    badge: "Only few left"
  },
  {
    id: "tb-004",
    slug: "labubu-collectible-doll",
    name: "Labubu Collectible Doll",
    price: 799,
    category: "Collectible dolls",
    collection: "Collectibles",
    description: "Adorable Labubu character plush doll — a trending pop-art collector's favourite.",
    stock: 4,
    badge: "New arrival"
  },
  {
    id: "tb-005",
    slug: "harry-potter-uno-card-game",
    name: "Harry Potter UNO Card Game",
    price: 349,
    category: "Card games",
    collection: "Harry Potter Collection",
    description: "Official Harry Potter themed UNO deck with wizard house rules and illustrated character cards.",
    stock: 12,
    badge: "Trending"
  },
  {
    id: "tb-006",
    slug: "hp-ultimate-fan-bundle",
    name: "HP Ultimate Fan Bundle",
    price: 1499,
    category: "Harry Potter gift sets",
    collection: "Gift Kits",
    description: "Complete Potterhead set with HP books, keychains, UNO cards & miniature figure — beautifully gift-wrapped.",
    stock: 2,
    badge: "Gift ready"
  }
];

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 }).lean();
    res.json(products.length ? products : mockProducts);
  } catch {
    res.json(mockProducts);
  }
});

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: "Unable to create product", detail: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: "Unable to update product", detail: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: "Unable to delete product", detail: error.message });
  }
});

module.exports = router;
