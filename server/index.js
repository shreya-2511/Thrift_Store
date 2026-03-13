const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "thrift-books-api" });
});

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

async function bootstrap() {
  if (process.env.MONGODB_URI) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.warn("MongoDB connection failed, continuing with mock fallbacks.", error.message);
    }
  }

  app.listen(port, () => {
    console.log(`Thrift Books API listening on port ${port}`);
  });
}

bootstrap();
