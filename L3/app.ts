// union, literals, type alias 

// UNION -> | pipe in ts
const sum = (num1: number | string , num2: number | string)=> {
    if(typeof num1 === "number" && typeof num2 === "number") return num1 + num2;
    else return num1.toString() + " " + num2.toString();
}

const num = sum(30,15);
const joined = sum("avni","sharma");
console.log(num,joined);


// LITERALS (custom types)
const add = (num1: number | string , num2: number | string, conversionType: "as-number" | "as-string")=> {
    if(typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") return +num1 + +num2;
    else return num1.toString() + " " + num2.toString();
}

const numNew = add(5,10,"as-number");
const strNum = add("15","20","as-number");
console.log(numNew,strNum);


// TYPE ALIAS 
type cutomType1 = number | string;
type customType2 = "as-number" | "as-string"

const combine = (num1: cutomType1 , num2: cutomType1, conversionType: customType2)=> {
    if(typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") return +num1 + +num2;
    else return num1.toString() + " " + num2.toString();
}

const el = combine(5,10,"as-number");
const strEl = combine("15","20","as-number");
const newName = combine("avni","sharma","as-string")
console.log(el,strEl,newName);


type User = {
    name: string;
    age: number;
    skills: string[];
}

const user : User ={
    name: "avni",
    age: 22,
    skills: ["react", "node"]
}

const greet = (user:User) => {
    console.log(`My name is ${user.name}`);
}

greet(user);