import { apikey } from "./util.js";
console.log(apikey);

function greetUser(userName, message = "Hello") {
  const greeting = `${message}, ${userName}`;
  console.log(greeting);
  return greeting;
}

const greetJohn = greetUser("John");
const greetBob = greetUser("Bob", "Hi");

let number = 10;
(number) => number * 3;

console.log(number);

// this creates an object
const user = {
  name: "John",
  age: 30,
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

user.sayHi();

// this creates a class

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

// this creates an instance of the class
const user1 = new User("John", 30);
console.log(user1);

const hobbies = ["Football", "Swimming", "Gaming"]
const newHobbies = ["Reading"]

// using the spread operator, we can merge the values of each without creating a name
// nested structure

const mergedHobbies = [...hobbies, ...newHobbies];
console.log(hobbies);
console.log(mergedHobbies);

const extendedUser = {
  isAdmin: true,
  ...user
}

console.log(extendedUser);