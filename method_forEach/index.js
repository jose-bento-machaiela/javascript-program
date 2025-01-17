// forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element

//  array.forEach(callback)
// element, index, array are provided

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array){
  array[index] = element * 2;
}

function display(element){
  console.log(element);
}


let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(capitalize)
fruits.forEach(displayString);

function upperCase(element, index, array){
  array[index] = element.toUpperCase();
}

function capitalize(element, index, array){
  array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}

function displayString(element){
  console.log(element);
}