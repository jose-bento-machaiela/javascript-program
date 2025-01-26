// callback = a function that is passed as an argument to another function

//    used to handle asynchronous operations:
//       1. Reading a file
//       2. Network requests
//       3. Interacting with databases

//       "hey, when you're done, call this next."

hello(goodbye);
hello(leave);

function hello(callback){
  console.log("Hello!");

  callback();
}


function leave(){
  console.log("Leave!")
}

function goodbye(){
  console.log("Goodbye!");
}


function sum(callback, x, y){
  let result = x + y;
  callback(result);
}

function displayConsole(result){
  console.log(result);
}

sum(displayConsole, 2, 2);


function displayPage(result){
  document.getElementById("myH1").textContent = result;
}

sum(displayPage, 2, 3)