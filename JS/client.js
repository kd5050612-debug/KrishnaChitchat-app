console.log("CLIENT JS STARTED");

const socket = io("https://krishnachitchat-app.onrender.com");

console.log("SOCKET CREATED");

socket.on("connect", () => {

    console.log("CONNECTED TO RENDER");
    console.log("Socket ID:", socket.id);

    const userName = prompt("Enter your name to join");

    if (!userName || userName.trim() === "") {
        return;
    }

    socket.emit("new-user-joined", userName.trim());

    console.log("USERNAME SENT:", userName);
});

socket.on("connect_error", (error) => {

    console.error("SOCKET CONNECTION ERROR");
    console.error(error);
});

socket.on("disconnect", (reason) => {

    console.log("DISCONNECTED:", reason);
});


socket.on("user-joined", (name) => {

    append(name + " joined the chat", "right");
});


socket.on("receive", (data) => {

    append(
        data.name + ": " + data.message,
        "left"
    );
});


socket.on("left", (name) => {

    append(
        name + " left the chat",
        "right"
    );
});


function append(message, position) {

    const messageElement =
        document.createElement("div");

    messageElement.innerText = message;

    messageElement.classList.add("message");
    messageElement.classList.add(position);

    document
        .querySelector(".container")
        .appendChild(messageElement);
}


document
    .getElementById("send-container")
    .addEventListener("submit", (e) => {

        e.preventDefault();

        const input =
            document.getElementById("messageInp");

        const message = input.value.trim();

        if (message === "") {
            return;
        }

        append(
            "You: " + message,
            "right"
        );

        socket.emit("send", message);

        input.value = "";
    });
