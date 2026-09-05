<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Krishna-ChitChat</title>

    <!-- Socket.IO Client -->
    <script
        src="https://cdn.socket.io/4.8.1/socket.io.min.js">
    </script>

    <!-- Main JavaScript -->
    <script
        defer
        src="./Js/client.js?v=30">
    </script>

    <!-- CSS -->
    <link
        rel="stylesheet"
        href="./Css/style.css"
    >
</head>

<body>

    <!-- Navigation -->
    <nav>

        <img
            class="logog"
            src="./logo.png"
            alt="Krishna-ChitChat Logo"
        >

        <h1>
            Welcome to KrishnaChitchat App
        </h1>

    </nav>


    <!-- Chat Messages -->
    <div class="container"></div>


    <!-- Message Input -->
    <div class="send">

        <form id="send-container">

            <input
                type="text"
                name="messageInp"
                id="messageInp"
                placeholder="Enter your message..."
                autocomplete="off"
            >

            <button
                class="btn"
                type="submit"
            >
                Send
            </button>

        </form>

    </div>


    <!-- Message Notification Sound -->
    <audio
        id="chatAudio"
        src="./fahhhhh.mp3"
        preload="auto">
    </audio>

</body>

</html>
