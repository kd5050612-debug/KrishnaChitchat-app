const socket = io('https://krishnachitchat-app.onrender.com');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');
const audio = document.getElementById('chatAudio') || new Audio('fahhhhh.mp3');

const unlockAudio = () => {
    audio.play().then(() => {
        audio.pause();
        audio.currentTime = 0;
    }).catch(() => {});
};

document.addEventListener('click', unlockAudio, { once: true });
document.addEventListener('keydown', unlockAudio, { once: true });
document.addEventListener('touchstart', unlockAudio, { once: true });

const append = (message, position) => {
    const messageElement = document.createElement('div');

    messageElement.innerText = message;

    messageElement.classList.add('message');
    messageElement.classList.add(position);

    messageContainer.append(messageElement);

    if (position === 'left') {
        audio.currentTime = 0;
        audio.play().catch(() => {});
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const message = messageInput.value.trim();

    if (!message) return;

    append(`You: ${message}`, 'right');

    socket.emit('send', message);

    messageInput.value = '';
});

const userName = prompt("Enter your name to join");

if (userName) {
    socket.emit('new-user-joined', userName);
}

socket.on('user-joined', name => {
    append(`${name} joined the chat`, 'right');
});

socket.on('receive', data => {
    append(`${data.name}: ${data.message}`, 'left');
});

socket.on('left', name => {
    append(`${name} left the chat`, 'right');
});
