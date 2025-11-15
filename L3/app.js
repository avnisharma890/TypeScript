// union, literals, type alias 
// UNION -> | pipe in ts
var sum = function (num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number")
        return num1 + num2;
    else
        return num1.toString() + " " + num2.toString();
};
var num = sum(30, 15);
var joined = sum("avni", "sharma");
console.log(num, joined);
// LITERALS (custom types)
var add = function (num1, num2, conversionType) {
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number")
        return +num1 + +num2;
    else
        return num1.toString() + " " + num2.toString();
};
var numNew = add(5, 10, "as-number");
var strNum = add("15", "20", "as-number");
console.log(numNew, strNum);
var combine = function (num1, num2, conversionType) {
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number")
        return +num1 + +num2;
    else
        return num1.toString() + " " + num2.toString();
};
var el = combine(5, 10, "as-number");
var strEl = combine("15", "20", "as-number");
var newName = combine("avni", "sharma", "as-string");
console.log(el, strEl, newName);
var user = {
    name: "avni",
    age: 22,
    skills: ["react", "node"]
};
var greet = function (user) {
    console.log("My name is ".concat(user.name));
};
greet(user);
