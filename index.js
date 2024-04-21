#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let mainTodo = [];
let userInput = true;
while (true) {
    let choseAnyOne = await inquirer.prompt({
        name: "choise",
        message: "Firstly chose what you want to do",
        type: "list",
        choices: [
            chalk.blueBright("Add Task"),
            chalk.redBright("Delete Task"),
            chalk.yellowBright("View Tasks"),
            chalk.greenBright("Add Task in Mid"),
            chalk.cyanBright("Exits")
        ]
    });
    if (choseAnyOne.choise === chalk.blueBright("Add Task")) {
        let addTask = await inquirer.prompt({
            name: "newTask",
            type: "input",
            message: chalk.bgBlueBright("Enter Your New Task:"),
        });
        mainTodo.push(addTask.newTask);
    }
    else if (choseAnyOne.choise === chalk.redBright("Delete Task")) {
        let deleteInput = await inquirer.prompt({
            name: "deleteLastElement",
            message: chalk.bgRedBright("Really You want to remove last Task?"),
            type: "confirm",
            default: true
        });
        mainTodo.pop();
    }
    else if (choseAnyOne.choise === chalk.yellowBright("View Tasks")) {
        chalk.bgYellowBright(console.log(mainTodo));
    }
    else if (choseAnyOne.choise === chalk.greenBright("Add Task in Mid")) {
        let addMiddleTask = await inquirer.prompt({
            name: "middleAdd",
            type: "input",
            message: chalk.bgGreenBright("Enter what you want to add task in middle:")
        });
        mainTodo.concat([addMiddleTask.middleAdd]);
    }
    else if (choseAnyOne.choise === chalk.cyanBright("Exits")) {
        let userExitInput = await inquirer.prompt({
            name: "exitInput",
            type: "confirm",
            message: chalk.bgCyanBright("Sure! you want to exit to this To-Do application?"),
            default: true,
        });
        userExitInput.exitInput = true;
        break;
    }
    else {
        console.log("Please select any one.");
    }
}
