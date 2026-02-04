import express from "express";
import productsRoute from "./routes/products.route.js";

const app = express();

app.use(express.json());

app.use("/products", productsRoute);

app.use("/", (req, res) => {
  res.send("fallback..404 - not found");
});

app.listen(3000, () => {
  console.log("Server is running...");
});
