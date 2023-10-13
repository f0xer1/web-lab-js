const user1Messages = document.getElementById("messages");
const user1Form = document.getElementById("user1-form");
const user1MessageInput = document.getElementById("user1-message");

const user2Form = document.getElementById("user2-form");
const user2MessageInput = document.getElementById("user2-message");

user1Form.addEventListener("submit", function (event) {
    event.preventDefault();
    const message = user1MessageInput.value.trim();
    if (message !== "") {
        sendMessage(user1Messages, message, "user1");
        user1MessageInput.value = "";
    }
});

user2Form.addEventListener("submit", function (event) {
    event.preventDefault();
    const message = user2MessageInput.value.trim();
    if (message !== "") {
        sendMessage(user1Messages, message, "user2");
        user2MessageInput.value = "";
    }
});

function sendMessage(messagesContainer, message, user ) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add("message");

    const nicknameElement = document.createElement("div");
    nicknameElement.textContent = user;
    nicknameElement.classList.add("user-nickname");

    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container", user);
    messageContainer.appendChild(nicknameElement);
    messageContainer.appendChild(messageElement);

    messagesContainer.appendChild(messageContainer);
}

