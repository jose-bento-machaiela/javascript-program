// this = reference to the object where THIS is used (the object depends onthe immediate context)
// doesn't work with arrow functions

// person.name = this.name


const person1 = {
  name: "SpongeBob",
  favFood: "hamburgers",
  sayHello: function(){console.log(`Hi! i am ${this.name}`)},
  eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.sayHello();
person1.eat();

const person2 = {
  name: "Patrick",
  favFood: "pizza",
  sayHello: function(){console.log(`Hi! i am ${this.name}`)},
  eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person2.eat();
