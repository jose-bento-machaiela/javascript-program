// logical operators = user to combine or manipulate boolean values (true or false)

// AND = &&
// OR = ||
// NOT = !

const temp = 20;

if(temp > 0 && temp <= 30){
    console.log("The weather is GOOD");
} else {
    console.log("The weather is BAD");
}

const isSunny = true;

if(!isSunny){
    console.log("It is CLOUDY")
} else {
    console.log("It is SUUNNY")
} 



// = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
// != inequality operator
// !== strict inequality operator

const PI = 3.14;

if(PI == "3.14") {
    console.log("That is Pi");
} else {
    console.log("That is NOT Pi");
}