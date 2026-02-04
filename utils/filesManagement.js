import fs from "fs/promises";

export async function readJsonFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    if (error) {
      return [];
    }
    throw error;
  }
}

export async function writeJsonFile(filePath, data) {
  try {
    await fs.writeFile(filePath, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}
