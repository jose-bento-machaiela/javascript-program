// string methods = allow you to manipulate and work with texts

let userName = "BigDev"
let phoneNumber = "123-456-7890"

console.log(userName.charAt(2))
console.log(userName.indexOf("i")) // lastIndexOf
console.log(userName.length)
console.log(userName.trim()) // cut spaces
console.log(userName.startsWith(" "))
console.log(userName.endsWith("v"))
console.log(userName.includes("D"))

console.log(phoneNumber.replaceAll("-", ""))
console.log(phoneNumber.padStart(15, "0")) // padEnd

userName.toUpperCase()
userName.repeat(3)


// --- string slicing = creating a substring from a portion of another string
// string.slice(start, end)

const fullName = "Big Developer"

//let firstName = fullName.slice(0, 3);
//let lastName = fullName.slice(4, 13);
//let firstChar = fullName.slice(0, 1);
//let lastChar = fullName.slice(-1)

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName)
console.log(lastName)

// ex 2

const email = "bigdev@gmail.com"

let userName2 = email.slice(0, email.indexOf("@"))
let extension = email.slice(email.indexOf("@") + 1)

console.log(userName2)
console.log(extension)
