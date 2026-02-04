export const validateProduct = (req, res, next) => {
  const { name, price, category } = req.body;
  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: "Invalid or missing product name" });
  }
  if (!price || typeof price !== "number" || price <= 0) {
    return res.status(400).json({ error: "Invalid or missing product price" });
  }
  if (!category || typeof category !== "string") {
    return res
      .status(400)
      .json({ error: "Invalid or missing product category" });
  }
  next();
};

export const validateProductUpdate = (req, res, next) => {
  const { name, price, category } = req.body;
  if (name && typeof name !== "string") {
    return res.status(400).json({ error: "Invalid product name" });
  }
  if (price && (typeof price !== "number" || price <= 0)) {
    return res.status(400).json({ error: "Invalid product price" });
  }
  if (category && typeof category !== "string") {
    return res.status(400).json({ error: "Invalid product category" });
  }
  next();
};
