```javascript
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "https://krishna-chitchat-app.vercel.app",
        methods: ["GET", "POST"],
        credentials: false
    }
});

const users = {};


/*
    HEALTH CHECK
*/

app.get("/", (req, res) => {

    res.status(200).send(
        "Krishna-ChitChat Socket.IO Server is running"
    );

});


/*
    SOCKET CONNECTION
*/

io.on("connection", (socket) => {

    console.log(
        "New connection:",
        socket.id
    );


    /*
        NEW USER
    */

    socket.on("new-user-joined", (name) => {

        users[socket.id] = name;

        console.log(
            `${name} joined the chat`
        );

        socket.broadcast.emit(
            "user-joined",
            name
        );

    });


    /*
        SEND MESSAGE
    */

    socket.on("send", (message) => {

        const name = users[socket.id];

        console.log(
            `${name}: ${message}`
        );

        socket.broadcast.emit(
            "receive",
            {
                name: name,
                message: message
            }
        );

    });


    /*
        USER DISCONNECTED
    */

    socket.on("disconnect", () => {

        const name = users[socket.id];

        if (name) {

            console.log(
                `${name} left the chat`
            );

            socket.broadcast.emit(
                "left",
                name
            );

            delete users[socket.id];

        }

    });

});


/*
    RENDER PORT
*/

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );

});
```
