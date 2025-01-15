// while loop = repeat some code WHILE some condition is true

// can user do{code} while ( the condition )

let userName = "";

// while(userName === "" || userName === null){
//     userName = window.prompt(`Enter your name`)
// }
console.log(`Hello ${userName}`);


let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username`)
    password = window.prompt(`Enter your password`)

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("Tou are logged in!");
    } else {
        console.log("Invalid credentials! Please try again!");
    }
}

// for loop = repeat some code a LIMITED amount of times


for(let i = 0; i <= 5; i ++) { // i+=2 
    console.log(`Hello in for-loop ${i}`)
}