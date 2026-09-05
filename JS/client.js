alert("CLIENT.JS LOADED");

console.log("CLIENT JS LOADED");

const socket = io("https://krishnachitchat-app.onrender.com");

console.log("Socket object created");

socket.on("connect", () => {

    alert("SOCKET CONNECTED");

    console.log("CONNECTED");
    console.log("Socket ID:", socket.id);

    const name = prompt("Enter your name:");

    console.log("Name entered:", name);

    if (name && name.trim() !== "") {
        socket.emit("new-user-joined", name.trim());
    }
});

socket.on("connect_error", (error) => {

    alert("SOCKET CONNECTION ERROR");

    console.error("Connection error:", error);
});

socket.on("user-joined", (name) => {

    console.log("User joined:", name);

    const div = document.createElement("div");
    div.innerText = name + " joined the chat";
    div.classList.add("message", "right");

    document.querySelector(".container").appendChild(div);
});

socket.on("receive", (data) => {

    console.log("Received:", data);

    const div = document.createElement("div");
    div.innerText = data.name + ": " + data.message;
    div.classList.add("message", "left");

    document.querySelector(".container").appendChild(div);
});

socket.on("left", (name) => {

    const div = document.createElement("div");
    div.innerText = name + " left the chat";
    div.classList.add("message", "right");

    document.querySelector(".container").appendChild(div);
});


document
    .getElementById("send-container")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        console.log("SEND CLICKED");

        const input = document.getElementById("messageInp");

        const message = input.value.trim();

        if (message === "") {
            return;
        }

        const div = document.createElement("div");

        div.innerText = "You: " + message;

        div.classList.add("message", "right");

        document.querySelector(".container").appendChild(div);

        socket.emit("send", message);

        input.value = "";
    });
