"use strict";
// union, literals, type alias 
Object.defineProperty(exports, "__esModule", { value: true });
// UNION -> | pipe in ts
const sum = (num1, num2) => {
    if (typeof num1 === "number" && typeof num2 === "number")
        return num1 + num2;
    else
        return num1.toString() + " " + num2.toString();
};
const num = sum(30, 15);
const joined = sum("avni", "sharma");
console.log(num, joined);
// LITERALS (custom types)
const add = (num1, num2, conversionType) => {
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number")
        return +num1 + +num2;
    else
        return num1.toString() + " " + num2.toString();
};
const numNew = add(5, 10, "as-number");
const strNum = add("15", "20", "as-number");
console.log(numNew, strNum);
const combine = (num1, num2, conversionType) => {
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number")
        return +num1 + +num2;
    else
        return num1.toString() + " " + num2.toString();
};
const el = combine(5, 10, "as-number");
const strEl = combine("15", "20", "as-number");
const newName = combine("avni", "sharma", "as-string");
console.log(el, strEl, newName);
const user = {
    name: "avni",
    age: 22,
    skills: ["react", "node"]
};
const greet = (user) => {
    console.log(`My name is ${user.name}`);
};
greet(user);
//# sourceMappingURL=app.js.map