import { readJsonFile } from "../utils/filesManagement.js";
import { fileURLToPath } from "node:url";
import { v4 as uuidv4 } from "uuid";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "..", "data", "products.json");
let products = [];

export const fetchProducts = async (req, res) => {
  const data = await readJsonFile(filePath);
  products = [...data];
  res.status(200).send(products);
};

export const fetchProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await readJsonFile(filePath);
    products = [...data];
    const product_exist = products.filter((product) => product.id === id);

    if (!(product_exist.length > 0)) {
      console.log("product_exist: ", product_exist);
      throw new Error("Product not found");
    }
    res.status(200).send(product_exist[0]);
  } catch (error) {
    res.status(400).send(error.message || error);
  }
};

export const newProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body;
    products.push({
      id: uuidv4(),
      name,
      price,
      category,
    });
    await writeJsonFile(filePath, products);
    res.status(201).send(`Product created with name: ${name}, price: ${price}`);
  } catch (error) {
    console.log(error);
    res.send("Error creating a new product");
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const products = await readJsonFile(filePath);

  const index = products.findIndex((product) => product.id === id);
  if (index === null) throw new Error("Product not found");
  products[index] = {
    ...products[index],
    ...req.body,
  };
  res.status(200).send(`Product with id: ${id} updated successfully`);
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await readJsonFile(filePath);
    products = [...data];
    const product_exist = products.filter((product) => product.id !== id);

    await writeJsonFile(filePath, product_exist);
    res.status(200).send(`Product with id: ${id} deleted successfully`);
  } catch (error) {
    res.status(400).send(error.message || error);
  }
};
