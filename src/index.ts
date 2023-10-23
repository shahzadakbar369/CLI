import * as inquirer from "inquirer";
import chalk from "chalk";


enum Operators{
    ADD = "Addition",
    SUBTRACT = "Subtraction",
    MULTIPLY = "Multiplication",
    DIVIDE = "Division"
}


const prompt = inquirer.createPromptModule();

function validateNumber(input: string): boolean | string {
    if (isNaN(parseFloat(input))) {
        return "Please Enter a valid number.";
} else {
    return true;
}}

async function main() 
{
    const input = await prompt([
{
        type : "input",
        name : "num1",
        message : "Please enter the first number: ",
        validate : validateNumber
},
{
    type : "list",
    name : "operator",
    message : "Please select an operator: ",
    choices : Object.values(Operators)
},
{
    type : "input",
    name : "num2",
    message : "Please enter the second number: ",
    validate : validateNumber
}
])

const num1 = parseFloat(input.num1)
const num2 = parseFloat(input.num2)
const selectedOperator = input.operator as Operators;
let result : number;

if (selectedOperator == Operators.ADD){
    result = num1 + num2;
    console.log(chalk.green.bgRedBright(`The sum of ${num1} and ${num2} is ${result}. `));
} else if (selectedOperator == Operators.SUBTRACT){
    result = num1 - num2;
    console.log(chalk.red.bgBlueBright(`The Difference of ${num1} and ${num2} is ${result}. `));
} else if (selectedOperator == Operators.MULTIPLY){
    result = num1 * num2;
    console.log(chalk.black.bgGreenBright(`The Product of ${num1} and ${num2} is ${result}. `));
} else if (selectedOperator == Operators.DIVIDE){
    result = num1 / num2;
    console.log(chalk.blue.bgYellowBright(`The Division of ${num1} and ${num2} is ${result}. `));
}

}


main()