// variable scope = where a variable is recognized and accessible (local vs global)


let global = 2; // global variable 

function function1(){
  let x = 1; //  local variable
  console.log(x+global)
}

function function2(){
  let x = 2; // local variable
  console.log(x+global)
}