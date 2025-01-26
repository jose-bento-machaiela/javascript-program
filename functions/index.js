// function = A section of reusable code. 
//            Declare code once, use it whenever you want. 
//            Call the function to execute that code


// happy Birthday function
function happyBirthday(userName, age){
    console.log(`Hello ${userName}, Happy birthday to you!`);
    console.log(`You are ${age} years old!`)
}

happyBirthday("BigDev", 20);
happyBirthday("Brother", 25);


// add function
function add(x, y){
    let result = x + y;
    return result;
}
console.log(add(2, 3));


// subtract function
function subtrack(x, y){
    return x - y;
}
console.log(subtrack(10, 7));


// multiply function
function multiply(x, y){
    return x * y;
}
console.log(multiply(5, 5));


// divide function
function divide(x, y){
    return x / y;
}
console.log(divide(60, 5));


// is even function
function isEven(number){

    // return number % 2 === 0 ? true : false;
    if(number % 2 === 0){
        return true;
    } else {
        return false;
    }
}
console.log(isEven(12));


// is valid email function
function isValidEmail(email){

    if(email.includes("@")){
        return true;
    } else {
        return false;
    }
    // return email.includes("@") ? true : false ;
}
console.log(isValidEmail("bigdev@gmail.com"));
console.log(isValidEmail("bigdev.com"));