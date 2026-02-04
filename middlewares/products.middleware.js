export const validateProduct = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: "Invalid or missing product name" });
  }
  if (!price || typeof price !== "number" || price <= 0) {
    return res.status(400).json({ error: "Invalid or missing product price" });
  }
  next();
};
