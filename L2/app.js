// Objects, Arrays, Tuples, Enums
// Array
var person1 = {
    name: "Dave",
    age: 23,
    skills: ["Coding", "Cooking", "Singing"],
};
console.log(person1);
var languages1;
languages1 = ["C++", "Javascript", "Python"];
var languages2; // retains js's dynamically typed nature but loses ts's power
languages2 = ["C++", 20, true];
// Object
var person2 = {
    name: "John",
    age: 23,
    place: {
        residence: "Seattle",
    },
};
console.log(person2);
// Tuples
var person3 = {
    name: "Mike",
    age: 23,
    skills: ["Coding", "Cooking", "Singing"],
    likes: ["songs", 23],
};
console.log(person3);
// Enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
;
var person4 = {
    name: "Tim",
    age: 23,
    skills: ["Coding", "Cooking", "Singing"],
    role: Role.ADMIN
};
if (person4.role === Role.ADMIN) {
    console.log("admin");
}
else if (person4.role === Role.USER) {
    console.log("user");
}
else {
    console.log("author");
}
