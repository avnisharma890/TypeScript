var add = function (num1, num2, printCond, someText) {
    // if(typeof num1 === "number" && typeof num2 === "number")
    //     return num1 + num2;    // JS Concept
    if (printCond) {
        console.log("".concat(someText, " ").concat(num1 + num2));
    }
    return num1 + num2;
};
var printCond = true;
var someText = "Sum of two numbers is: ";
var sum = add(40, 8, printCond, someText);
console.log(sum);
