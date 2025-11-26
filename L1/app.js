"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = (num1, num2, printCond, someText) => {
    // if(typeof num1 === "number" && typeof num2 === "number")
    //     return num1 + num2;    // JS Concept
    if (printCond) {
        console.log(`${someText} ${num1 + num2}`);
    }
    return num1 + num2;
};
const printCond = true;
const someText = "Sum of two numbers is: ";
const sum = add(40, 8, printCond, someText);
console.log(sum);
//# sourceMappingURL=app.js.map