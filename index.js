#! usr\bin\env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Enter the operation that your want to perform operation", type: "list", name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
// Conditional Statements
if (answer.operators === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Invalid Operator");
}
