// 06:10:00

// nested objects = Objects inside of other Objects. Allow you to represent more complex data structures, child object is enclosed by a Parent Object

// Person{Adress{}, ContactInfo{}}
// ShoppingCart{KeyBoard{}, Mouse{}, Monitor{}}

const person = {
  fullName: "Big Developer",
  age: 20,
  isStudent: true,
  hobbies: ["cooking", "coding", "watch"],
  address: {
    street: "007 Green Street",
    city: "Maputo",
    country: "Moz"
  }
}