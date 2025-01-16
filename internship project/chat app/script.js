// script.js

document.addEventListener("DOMContentLoaded", () => {
  const messagesContainer = document.getElementById("messages");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");

  function addMessage(text, type) {
    const message = document.createElement("div");
    message.classList.add("message", type);
    message.textContent = text;
    messagesContainer.appendChild(message);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll
  }

  sendButton.addEventListener("click", () => {
    const messageText = messageInput.value.trim();
    if (messageText) {
      addMessage(messageText, "sent");
      messageInput.value = "";
      // Simulate a received message
      setTimeout(() => {
        addMessage("Reply: " + messageText, "received");
      }, 1000);
    }
  });

  messageInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      sendButton.click();
    }
  });
});
