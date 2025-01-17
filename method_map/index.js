// .map() = accepts a callback and apllies that function to each element of an array, then return a new array

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);


function square(element){
  return Math.pow(element, 2);
}

function cube(element){
  return Math.pow(element, 3);
}


const students = ["Spongebob", "Squidward", "Big Dev", "Sandy"];

const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

function upperCase(element){
  return element.toUpperCase();
}

function lowerCase(element){
  return element.toLowerCase();
}


const dates = ["2025-01-17", "2024-03-21", "2023-01-01"];
const formattedDate = dates.map(formatDates);

console.log(formattedDate)

function formatDates(element){
  const parts = element.split("-");

  return `DD/MM/YYYY: ${parts[2]}/${parts[1]}/${parts[0]}}`;
}
