const fs = require("fs/promises");
const path = require("path");

async function main() {
  try {
    await fs.mkdir("test_folder");
    console.log("Folder create successfully");
  } catch (error) {
    console.error("Error creando al carperta: ", error);
  }
  try {
    await fs.rename("test_folder", "nueva carpeta");
  } catch (error) {
    console.error("Error renombrando al carperta: ", error);
  }
  
}   

main();
