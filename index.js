#! /usr/bin/env node  
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result
const readomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Place guess number between 1-10:",
    }
]);
if (answers.userGuessedNumber === readomNumber) {
    console.log("Congrats! You guessed the correct number!");
}
else {
    console.log("You guessed wrong number");
}
