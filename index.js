const fs = require('fs/promises');

async function main(){
    try {
        const data = await fs.readFile("input.txt", 'utf-8');
        console.log("File content:", data);
    } catch (error) {
        console.error("Error reading file:", error);  // ✅ Corrección aquí
    }

    try {
        await fs.writeFile("Output.txt", "Hello world!", "utf-8");
        console.log("file created successfully");
    } catch (error) {
        console.error("Errpr creating fil;e", error);        
    }

     
}

main();