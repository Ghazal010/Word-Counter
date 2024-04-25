import inquirer from "inquirer"
import chalk from "chalk"

const answer : {sentence : string} = await inquirer.prompt({
    name : "sentence",
    type : "input",
    message : "Please enter your sentence to count words"
})

const words = answer.sentence.trim().split(" ")

console.log(chalk.bold.yellowBright (words));

console.log(chalk.bold.magentaBright`Your sentence word count is ${words.length}`)