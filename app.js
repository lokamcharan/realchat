function sendMessage() {
            let messageInput = document.getElementById("message-input");
            let message = messageInput.value.trim();
            if (message !== "") {
              let chatMessages = document.querySelector(".chat-messages");
              let messageElement = document.createElement("div");
              messageElement.classList.add("message");
              messageElement.textContent = message;
              chatMessages.appendChild(messageElement);
              messageElement.style.display = "block";
              messageInput.value = "";
              chatMessages.scrollTop = chatMessages.scrollHeight;
            }
          }
          document.getElementById("send-button");
          document.addEventListener("click", sendMessage);

          document.getElementById("message-input");
          document.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              sendMessage();
            }
          });