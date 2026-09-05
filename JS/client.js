const socket = io('https://krishnachitchat-app.onrender.com', {
    transports: ['websocket'],
    upgrade: false
});

const loginOverlay = document.getElementById('login-overlay');
const usernameInput = document.getElementById('username-input');
const joinBtn = document.getElementById('join-btn');
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');
const audio = document.getElementById('chatAudio');

let chatUnlocked = false;

const unlockAudio = () => {
    audio.play().then(() => {
        audio.pause(); 
        audio.currentTime = 0;
    }).catch(e => console.log("Audio initialized."));
};

const joinChat = () => {
    const name = usernameInput.value.trim();
    if (name !== "") {
        unlockAudio();
        socket.emit('new-user-joined', name);
        loginOverlay.style.display = 'none'; // Hide login screen smoothly
        chatUnlocked = true;
        messageInput.focus();
    }
};

joinBtn.addEventListener('click', joinChat);
usernameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') joinChat();
});

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight; // Auto-scrolls to newest message
    
    if (position === 'left') {
        audio.play().catch(error => console.log("Audio playback blocked:", error));
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!chatUnlocked) return;
    
    const message = messageInput.value.trim();
    if (message !== '') {
        append(`You: ${message}`, 'right');
        socket.emit('send', message);
        messageInput.value = '';
    }
});

socket.on('user-joined', name => {
    append(`${name} joined the chat`, 'right');
});

socket.on('receive', data => {
    append(`${data.name}: ${data.message}`, 'left');
});

socket.on('left', name => {
    append(`${name} left the chat`, 'right');
});
