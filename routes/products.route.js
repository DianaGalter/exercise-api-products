import express from "express";
import {
  fetchProducts,
  fetchProduct,
  newProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";
import {
  validateProduct,
  validateProductUpdate,
} from "../middlewares/products.middleware.js";
const router = express.Router();

router.get(
  "/",
  (req, res, next) => {
    next();
  },
  fetchProducts,
);

router.get("/:id", fetchProduct);

router.post("/", validateProduct, newProduct);

router.patch("/:id", validateProductUpdate, updateProduct);
router.delete("/:id", deleteProduct);

export default router;
