// how to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

// using prompt
// let username;
// username = window.prompt("what's your User Name");
// console.log(username);

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username)

    document.getElementById("yourname").textContent += username;
    // document.getElementById("yourname").textContent = `Hello ${username}!`;
}