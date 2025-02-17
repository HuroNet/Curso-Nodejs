const fs = require('fs/promises');///es uin modulo en version de promesas
const EventEmitter = require('events');
const { error } = require('console');

class FileReadEmiter extends EventEmitter{
    async readFile(file){
        try {
            const data = await fs.readFile(file, 'utf8');
            this.emit("read",file,data);// Dispara el evento 'read'
        } catch (error) {
            this.emit("error", error);
        }
    }
}

const fileReadEMitter = new FileReadEmiter();

fileReadEMitter.on("read", (file, data)=>{
    console.log(`File ${file} read succesfully`, data);
});

fileReadEMitter.on("error",(error)=>{
    console.log(`There was an error: ${error.message}`);
});

fileReadEMitter.on("beforeRead", (file)=>{
    console.log(`leyendo el archivo ${file}`);
});


// (async()=>{
//     await fileReadEMitter.readFile("archivo1.txt");
//     await fileReadEMitter.readFile("archivo2.txt")
// })();