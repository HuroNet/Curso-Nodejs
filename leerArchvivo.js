const fs = require('fs/promises');///es uin modulo en version de promesas
const EventEmitter = require('events');

class FileReadEmiter extends EventEmitter{
    async readFile(file){
        try {
            const data = await fs.readFile(file, 'utf8');
            this.emit('read',file,data)
        } catch (error) {
            
        }
    }
}