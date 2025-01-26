// rest parameters = (...rest) allow a function work with a variable number of arguments by bunding them into an array

// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array

function openFridge(...foods){
  console.log(foods);
  console.log(...foods);
}

function getFood(...foods){
  return foods;
}

const food1 = "pizza";
const food2 = "hamburguer";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);

const foods = getFood( food5, food4, food3, food2, food1);
console.log(foods);



function sum(...numbers){
  let result = 0;

  for(let number of numbers){
    result += number;
  }

  return result;
}

const total = sum(1, 1, 2, 3, 4, 5);
console.log(`Your total is ${total}`);

function getAvarage(...numbers){
  let result = 0;

  for(let number of numbers){
    result += number;
  }

  return result / numbers.length;
}

const avarage = getAvarage(75, 100, 85, 90, 50);
console.log(avarage);



function combineStrings(...strings){
  return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullName);
