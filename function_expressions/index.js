// function declaration = define a reusable block of code that performs a specific tast

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square);

console.log(squares);

function square(element){
  return Math.pow(element, 2);
}

// function expressions = a way to define functions as values or variables

// 1. Callbacks in asynchronous aperations
// 2. Higher-Order Functions
// 3. Closures
// 4. Event Listeners


const hello2 = function(){
  console.log("hello")
}

setTimeout(function() {
  console.log("Goodbye!")
}, 4000);

const squares2 = numbers.map(function(element){
  return Math.pow(element, 2);
});

const cubes = numbers.map(function(element){
  return Math.pow(element, 3);
});

const evenNums = numbers.filter(function(element){
  return element % 2 === 0;
});

const total = numbers.reduce(function(accumulator, element){
  return accumulator + element;
});

console.log(squares2);
console.log(cubes);
console.log(evenNums);
console.log(total);



