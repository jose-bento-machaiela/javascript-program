// spread operator = ... allows an itarable such as an array or string to be expanded into separate elements (unpacks the elements)


let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);



let username = "Big Dev";
let letters = [...username];

console.log(letters)



let fruits = ["aplle", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods)