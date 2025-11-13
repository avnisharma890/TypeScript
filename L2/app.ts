// Objects, Arrays, Tuples, Enums

// Array
const person1: {
  name: string;
  age: number;
  skills: string[];
} = {
  name: "Dave",
  age: 23,
  skills: ["Coding", "Cooking", "Singing"],
};

console.log(person1);

let languages1: string[];
languages1 = ["C++", "Javascript", "Python"];

let languages2: any[]; // retains js's dynamically typed nature but loses ts's power
languages2 = ["C++", 20, true];

// Object
const person2: {
  name: string;
  age: number;
  place: {
    residence: string;
  };
} = {
  name: "John",
  age: 23,
  place: {
    residence: "Seattle",
  },
};

console.log(person2);


// Tuples
const person3: {
  name: string;
  age: number;
  skills: string[];
  likes: [string,number]; // an array of more than 1 datatypes
} = {
  name: "Mike",
  age: 23,
  skills: ["Coding", "Cooking", "Singing"],
  likes: ["songs",23],
};

console.log(person3);


// Enums

enum Role {ADMIN, AUTHOR, USER};

const person4 = {
  name: "Tim",
  age: 23,
  skills: ["Coding", "Cooking", "Singing"],
  role: Role.ADMIN
};

if(person4.role === Role.ADMIN) {
  console.log("admin");
} else if(person4.role === Role.USER) {
  console.log("user");
} else {
  console.log("author");
}
