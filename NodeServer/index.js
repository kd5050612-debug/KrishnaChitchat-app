const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const users = {};

app.get("/", (req, res) => {
    res.status(200).send("Krishna-ChitChat Server is Running");
});

io.on("connection", (socket) => {

    console.log("USER CONNECTED:", socket.id);

    socket.on("new-user-joined", (name) => {

        users[socket.id] = name;

        console.log(name + " joined the chat");

        socket.broadcast.emit("user-joined", name);
    });

    socket.on("send", (message) => {

        const name = users[socket.id];

        console.log(name + ": " + message);

        socket.broadcast.emit("receive", {
            name: name,
            message: message
        });
    });

    socket.on("disconnect", () => {

        const name = users[socket.id];

        if (name) {

            console.log(name + " left the chat");

            socket.broadcast.emit("left", name);

            delete users[socket.id];
        }
    });
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
