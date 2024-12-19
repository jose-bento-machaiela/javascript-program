// if statement

// let age = 0;
// let hasLicense = true;


// if(age >= 16){
//     console.log("You are old enough to drive");

//     if(hasLicense){
//         console.log("You have your license!");
//     } else {
//         console.log("You do not have your license yet!");
//     }
// } else {
//     console.log("You must be 16+ to have a license");
// }


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age = 0;


mySubmit.onclick = function (){

    age = myText.value;

    age = Number(age);

    if (age >= 100) {
        console.log();
        resultElement.textContent = `You are too old to enter to this site`;

    } else if (age == 0){
        resultElement.textContent = `you can't enter. You were just born`
    } else if(age >= 18){
        resultElement.textContent = `You are old enough to enter this site`

    } else if(age < 0){
        resultElement.textContent = `Your age can't be below 0`
    }  else {
        resultElement.textContent = `You must be 18+ to enter this site`
    }
}

