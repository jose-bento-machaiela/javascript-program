// array = a variable like structure that can hold more than 1 value

let fruits = ["aplle", "orange", "banana"];

fruits[0] = "coconut"

fruits.push("morango")
// fruits.pop();
// fruits.unshift("mango");
// fruits.shift();

console.log(fruits)
console.log(fruits[1])
console.log(fruits[0])


let numOffFruits = fruits.length;
console.log(numOffFruits);

let index = fruits.indexOf("apple")
console.log(index);


for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

// simple for_loop to arrays
for(let fruit of fruits){
  console.log(fruit)
}

fruits.sort().reverse();