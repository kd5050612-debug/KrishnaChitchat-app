const socket = io("https://krishnachitchat-app.onrender.com");

const audio = document.getElementById("chatAudio");

let audioUnlocked = false;


// Unlock audio after user's first interaction
document.addEventListener("click", () => {

    if (audioUnlocked) {
        return;
    }

    audio.play()
        .then(() => {
            audio.pause();
            audio.currentTime = 0;
            audioUnlocked = true;

            console.log("Audio unlocked");
        })
        .catch((error) => {
            console.log("Audio unlock failed:", error);
        });

}, { once: true });


function playMessageSound() {

    if (!audio) {
        console.log("Audio element not found");
        return;
    }

    audio.currentTime = 0;

    audio.play()
        .then(() => {
            console.log("Fahhhh sound played");
        })
        .catch((error) => {
            console.log("Sound blocked:", error);
        });
}


socket.on("connect", () => {

    console.log("CONNECTED");

    const userName = prompt("Enter your name to join");

    if (!userName || userName.trim() === "") {
        return;
    }

    socket.emit(
        "new-user-joined",
        userName.trim()
    );
});


socket.on("user-joined", (name) => {

    append(
        name + " joined the chat",
        "right"
    );
});


socket.on("receive", (data) => {

    append(
        data.name + ": " + data.message,
        "left"
    );

    playMessageSound();
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

    messageElement.classList.add(
        "message",
        position
    );

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

        const message =
            input.value.trim();

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
