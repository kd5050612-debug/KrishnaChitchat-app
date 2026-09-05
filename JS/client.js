console.log("=================================");
console.log("CLIENT JS STARTED");
console.log("=================================");

const socket = io("https://krishnachitchat-app.onrender.com", {
    transports: ["polling", "websocket"],
    reconnection: true
});

const form = document.getElementById("send-container");
const messageInput = document.getElementById("messageInp");
const messageContainer = document.querySelector(".container");
const audio = document.getElementById("chatAudio");

console.log("Form:", form);
console.log("Input:", messageInput);
console.log("Container:", messageContainer);

function append(message, position) {

    const messageElement = document.createElement("div");

    messageElement.innerText = message;

    messageElement.classList.add("message");
    messageElement.classList.add(position);

    messageContainer.appendChild(messageElement);

    messageContainer.scrollTop = messageContainer.scrollHeight;

    if (position === "left" && audio) {
        audio.currentTime = 0;

        audio.play().catch(() => {
            console.log("Audio blocked by browser");
        });
    }
}


// ===============================
// SOCKET CONNECTED
// ===============================

socket.on("connect", () => {

    console.log("=================================");
    console.log("CONNECTED TO SERVER");
    console.log("Socket ID:", socket.id);
    console.log("=================================");

    const userName = prompt("Enter your name to join");

    if (!userName || userName.trim() === "") {

        alert("Please enter your name.");

        return;
    }

    socket.emit(
        "new-user-joined",
        userName.trim()
    );

    console.log(
        "Username sent:",
        userName.trim()
    );
});


// ===============================
// CONNECTION ERROR
// ===============================

socket.on("connect_error", (error) => {

    console.error(
        "SOCKET CONNECTION ERROR:",
        error
    );
});


// ===============================
// DISCONNECTED
// ===============================

socket.on("disconnect", (reason) => {

    console.log(
        "Disconnected:",
        reason
    );
});


// ===============================
// USER JOINED
// ===============================

socket.on("user-joined", (name) => {

    console.log(
        "User joined:",
        name
    );

    append(
        `${name} joined the chat`,
        "right"
    );
});


// ===============================
// RECEIVE MESSAGE
// ===============================

socket.on("receive", (data) => {

    console.log(
        "Message received:",
        data
    );

    append(
        `${data.name}: ${data.message}`,
        "left"
    );
});


// ===============================
// USER LEFT
// ===============================

socket.on("left", (name) => {

    console.log(
        "User left:",
        name
    );

    append(
        `${name} left the chat`,
        "right"
    );
});


// ===============================
// SEND MESSAGE
// ===============================

form.addEventListener("submit", (e) => {

    // VERY IMPORTANT
    e.preventDefault();

    console.log("SEND BUTTON CLICKED");

    const message = messageInput.value.trim();

    if (message === "") {
        return;
    }

    // Show message immediately
    append(
        `You: ${message}`,
        "right"
    );

    // Send to server
    socket.emit(
        "send",
        message
    );

    console.log(
        "Message sent:",
        message
    );

    // Clear input only
    messageInput.value = "";

});
