import express from "express";
import {
  fetchProducts,
  fetchProduct,
  newProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";
import { validateProduct } from "../middlewares/products.middleware.js";
const router = express.Router();

router.get(
  "/products",
  (req, res, next) => {
    next();
  },
  fetchProducts,
);

router.get("/products/:id", fetchProduct);

router.post("/products", validateProduct, newProduct);

router.patch("/products/:id", validateProduct, updateProduct);

router.delete("/products/:id", deleteProduct);

export default router;
