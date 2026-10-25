
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
