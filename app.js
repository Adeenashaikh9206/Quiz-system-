import inquirer from "inquirer";
console.log("welcome to my adventure quiz game");
console.log("you are required to gain maximum 4 points for the win");
let points = 0;
// question1
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "typescript ia a superset off?",
        type: "list",
        choices: ["python", "c++", "java", "javascript"]
    }
]);
if (question1.one == "javascript") {
    console.log("your answer is correct");
}
else {
    console.log("incorrect answer");
}
// question2
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "which of the following is a benefit of using typescript?",
        type: "list",
        choices: ["faster execution speed", "improved code readability", "better error reporting and catching", "javascript"]
    }
]);
if (question2.two == "better error reporting and catching") {
    console.log("your answer is correct");
}
else {
    console.log("incorrect answer");
}
// question3
let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "how do you declares a function in typescript?",
        type: "list",
        choices: ["function keyword", "func keyword", "==> operator", "->"]
    }
]);
if (question3.three == "function keyword") {
    console.log("your answer is correct");
}
else {
    console.log("incorrect answer");
}
// question4
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: " what is the print function in typescript called?",
        type: "list",
        choices: ["print()", "console.log()", "output()", "display()"]
    }
]);
if (question4.four == "console.log()") {
    console.log("your answer is correct");
}
else {
    console.log("incorrect answer");
}
