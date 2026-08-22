// ================================
// EstateHub AI Chat (Groq)
// ================================

// ======== CONFIG =========
const API_KEY = "";    
const MODEL = "llama-3.3-70b-versatile";
const API_URL = "https://api.groq.com/openai/v1/chat/completions";

// Future PHP migration:
// const API_URL = "./api/chat.php";


// ======== ELEMENTS =========
const chatForm = document.getElementById("chatForm");
const userMessage = document.getElementById("userMessage");

const chatContainer = document.querySelector(".chat-window > div:nth-child(2)");


// ======== SEND MESSAGE =========
chatForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const message = userMessage.value.trim();

    if (!message) return;

    addMessage(message, true);

    userMessage.value = "";

    const loading = createLoading();

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {

                "Authorization": `Bearer ${API_KEY}`,

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                model: MODEL,

                messages: [

                    {
                        role: "user",
                        content: message
                    }

                ],

                temperature: 0.7

            })

        });

        const data = await response.json();

        loading.remove();

        if (data.error) {

            addMessage(data.error.message, false);

            return;

        }

        addMessage(data.choices[0].message.content, false);

    }

    catch (err) {

        loading.remove();

        addMessage("Connection Error!", false);

        console.error(err);

    }

});


// ======== USER / AI MESSAGE =========
function addMessage(text, me = false) {

    const row = document.createElement("div");

    row.className = me ? "bubble-row me" : "bubble-row";

    const bubble = document.createElement("div");

    bubble.className = "bubble";

    bubble.textContent = text;

    row.appendChild(bubble);

    chatContainer.appendChild(row);

    chatContainer.scrollTop = chatContainer.scrollHeight;

}


// ======== LOADING =========
function createLoading() {

    const row = document.createElement("div");

    row.className = "bubble-row";

    row.id = "loadingBubble";

    const bubble = document.createElement("div");

    bubble.className = "bubble";

    bubble.innerHTML = "Typing...";

    row.appendChild(bubble);

    chatContainer.appendChild(row);

    chatContainer.scrollTop = chatContainer.scrollHeight;

    return row;

}
