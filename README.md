<div align="center">

# 💬 KrishnaChitchat

### Real-time chat application powered by WebSockets

<p>
  <em>Instant messaging, live typing indicators, and seamless real-time communication — built with Socket.IO</em>
</p>

<p>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.IO" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white" alt="Nodemon" />
</p>

<p>
  <img src="https://img.shields.io/github/stars/kd5050612-debug/KrishnaChitchat?style=flat-square&color=yellow" alt="Stars" />
  <img src="https://img.shields.io/github/forks/kd5050612-debug/KrishnaChitchat?style=flat-square&color=blue" alt="Forks" />
  <img src="https://img.shields.io/github/last-commit/kd5050612-debug/KrishnaChitchat?style=flat-square" alt="Last Commit" />
  <img src="https://img.shields.io/github/languages/top/kd5050612-debug/KrishnaChitchat?style=flat-square" alt="Top Language" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License" />
</p>

[Live Demo](#) · [Report Bug](https://github.com/kd5050612-debug/KrishnaChitchat/issues) · [Request Feature](https://github.com/kd5050612-debug/KrishnaChitchat/issues)

</div>

---

## 📖 Overview

**KrishnaChitchat** is a lightweight, real-time chat application built to demonstrate the power of WebSockets using **Socket.IO**. Messages travel instantly between connected clients with no page reloads — just fast, event-driven communication.

## ✨ Features

- ⚡ **Real-time messaging** — instant delivery via WebSocket events
- 👥 **Live user presence** — see who's online/joined the room
- ⌨️ **Typing indicators** — know when someone's typing
- 🎨 **Clean, responsive UI** — built with plain HTML/CSS, works on mobile & desktop
- 🔄 **Auto-reload dev server** — powered by Nodemon for fast iteration
- 🧩 **Minimal dependencies** — easy to read, extend, and deploy

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express |
| Real-time Engine | Socket.IO |
| Frontend | HTML5, CSS3, Vanilla JS |
| Dev Tooling | Nodemon |

## 📂 Project Structure

```
KrishnaChitchat/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/kd5050612-debug/KrishnaChitchat.git

# Move into the project directory
cd KrishnaChitchat

# Install dependencies
npm install
```

### Running the app

```bash
# Development mode (auto-restart with nodemon)
npm run dev

# Production mode
npm start
```

Then open your browser at:

```
http://localhost:3000
```

## ⚙️ Configuration

Create a `.env` file in the root directory if you need to customize the port:

```env
PORT=3000
```

## 🧪 How It Works

1. The Express server serves static frontend files and initializes a Socket.IO instance.
2. When a client connects, the server listens for events like `join`, `message`, and `typing`.
3. Incoming events are broadcast to all (or relevant) connected clients in real time.
4. The frontend listens for these events and updates the DOM instantly — no refresh needed.

## 🗺️ Roadmap

- [ ] Private/direct messaging
- [ ] Chat rooms / channels
- [ ] Message persistence with a database
- [ ] User authentication
- [ ] Emoji & file sharing support

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **MIT License**.

## 👤 Author

**Krishna Das**

<p>
  <a href="https://github.com/kd5050612-debug"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/></a>
  <a href="https://www.linkedin.com/in/krishna-das-194155349"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
  <a href="https://leetcode.com/u/Krishna_016/"><img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" alt="LeetCode"/></a>
</p>

---

<div align="center">

If you found this project useful, consider giving it a ⭐!

</div>
