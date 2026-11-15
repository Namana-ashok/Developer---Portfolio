
const button = document.getElementById("helloButton");
const message = document.getElementById("message");

button.addEventListener("click", function() {
    message.textContent = "Hello! Welcome to my portfolio!";
});
function calculateSum() {
        let a = Number(document.getElementById("num1").value);
        let b = Number(document.getElementById("num2").value);

        let sum = a + b;

        document.getElementById("result").textContent =
            "Sum: " + sum;
    }
    
const goalButton = document.getElementById("goalButton");
const goalMessage = document.getElementById("goalMessage");

goalButton.addEventListener("click", function () {
    goalMessage.textContent =
        "My next goal is to improve my Java, web development, and data analysis skills!";
});
// Display welcome message
document.getElementById("welcomeMessage").textContent =
    "Welcome to My Portfolio!";

// Get the current date
let today = new Date();

// Format the date
let date = today.toLocaleDateString();

// Display the date
document.getElementById("currentDate").textContent =
    "Today's Date: " + date;

function showSkills() {
    document.getElementById("skillsMessage").textContent =
        "I am learning Java, HTML, CSS, JavaScript, Python and SQL.";
}
function calculate() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let operation = document.getElementById("operation").value;

    let result;

    if (document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === "") {
        document.getElementById("result").textContent =
            "Please enter both numbers.";
        return;
    }

    if (operation === "add") {
        result = a + b;
    }
    else if (operation === "subtract") {
        result = a - b;
    }
    else if (operation === "multiply") {
        result = a * b;
    }
    else if (operation === "divide") {
        if (b === 0) {
            document.getElementById("result").textContent =
                "Cannot divide by zero.";
            return;
        }
        result = a / b;
    }

    document.getElementById("result").textContent =
        "Result: " + result;
}
function calculatePortfolio() {

    let num1 = document.getElementById("calcNum1").value;
    let num2 = document.getElementById("calcNum2").value;

    let a = Number(num1);
    let b = Number(num2);

    let operation = document.getElementById("calcOperation").value;

    let result;

    if (num1 === "" || num2 === "") {
        document.getElementById("calcResult").textContent =
            "Please enter both numbers.";
        return;
    }

    if (operation === "add") {
        result = a + b;
    }
    else if (operation === "subtract") {
        result = a - b;
    }
    else if (operation === "multiply") {
        result = a * b;
    }
    else if (operation === "divide") {

        if (b === 0) {
            document.getElementById("calcResult").textContent =
                "Cannot divide by zero.";
            return;
        }

        result = a / b;
    }

    document.getElementById("calcResult").textContent =
        "Result: " + result;
}
// Get chatbot elements
document.addEventListener("DOMContentLoaded", function () {

    const chatbotToggle = document.getElementById("chatbotToggle");
    const chatbotWindow = document.getElementById("chatbotWindow");
    const chatbotClose = document.getElementById("chatbotClose");

    // Check whether elements exist
    console.log("Chatbot elements:", chatbotToggle, chatbotWindow, chatbotClose);

    // Open chatbot
    chatbotToggle.addEventListener("click", function () {
        chatbotWindow.classList.remove("hidden");
        console.log("Chatbot opened!");
    });

    // Close chatbot
    chatbotClose.addEventListener("click", function () {
        chatbotWindow.classList.add("hidden");
        console.log("Chatbot closed!");
    });

});
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendMessage");
const chatMessages = document.getElementById("chatMessages");
console.log("Input:", chatInput);
console.log("Send button:", sendButton);
console.log("Messages:", chatMessages);
function getBotResponse(message) {

    let question = message.toLowerCase();

    if (question.includes("project")) {
        return "My projects include Student Marks Management System, Personal Portfolio Website, Student Marks Analysis, and Public API Practice.";
    }

    else if (question.includes("student marks analysis")) {
        return "Student Marks Analysis is a project where I analyse student marks using Excel and Python to calculate totals, averages, and identify performance patterns.";
    }

    else if (question.includes("student marks")) {
        return "My Student Marks Management System is a beginner project involving student marks, calculations, total scores, and averages.";
    }

    else if (question.includes("api")) {
        return "My Public API Practice project uses JavaScript, Fetch API, and JSON to retrieve and display sample user information.";
    }

    else if (question.includes("skill") || question.includes("technology")) {
        return "My technical skills include Java, HTML, CSS, JavaScript, Python basics, Excel basics, and Git and GitHub.";
    }

    else if (question.includes("portfolio")) {
        return "My Personal Portfolio Website introduces me, displays my education, technical skills, learning goals, and projects. It is built using HTML, CSS, and JavaScript.";
    }

    else {
        return "I'm still learning! Please ask me about my projects, skills, Student Marks Analysis, or Public API Practice.";
    }
}

// Your existing function continues below
function sendChatMessage() {

    let message = chatInput.value.trim();

    if (message === "") {
        alert("Please enter a message!");
        return;
    }

    // Keep the remaining code as it is
}

function sendChatMessage() {

    let message = chatInput.value.trim();

    if (message === "") {
        alert("Please enter a message!");
        return;
    }

    let userMessage = document.createElement("p");

    userMessage.textContent = message;
    userMessage.classList.add("user-message");

    chatMessages.appendChild(userMessage);

    chatInput.value = "";

    let botMessage = document.createElement("p");

    botMessage.textContent = getBotResponse(message);

    botMessage.classList.add("bot-message");

    chatMessages.appendChild(botMessage);
}


sendButton.addEventListener("click", sendChatMessage);

chatInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendChatMessage();
    }

});