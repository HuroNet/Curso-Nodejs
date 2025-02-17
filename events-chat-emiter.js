const EventEmiter = require('events');

class ChatRoom extends EventEmiter  {
    join(user){
        console.log(`${user} joined the chat room`);
        this.emit('join', user);
    }

    sendMessage(user, message){
        console.log(`Hey el ${user} send a message: ${message}`);
        this.emit('message', user, message);
    }
}

const chatRoom = new ChatRoom;

chatRoom.on('join',(user)=>{
    console.log(`welcome ${user}`);
});

chatRoom.on('message', (user, message)=>{
    console.log(`New message from ${user} send a ${message}`)
});

// chatRoom.join("calo");
// chatRoom.join("jeins")
// chatRoom.sendMessage("calo","hola a tods")