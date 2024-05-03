#!  usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 5522;

let pinAnswer = await inquirer.prompt(
    [
        {
            name:"pin",
            message:"Enter your pin:",
            type:"number",
        }
    ]
);

if(pinAnswer.pin === myPin)
    {
        console.log("Correct Pin Code!");

    let operationAns = await inquirer.prompt(
            [
                {
                    name:"operation",
                    message:"Please select option",
                    type:"list",
                    choices:["Withdraw", "Check balance"]
                }
            ]
        );
    if(operationAns.operation === "Withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"Enter your amount:",
                    type:"number"
                }
            ]
        );
        
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is:" + myBalance)
    }
    else if(operationAns.operation === "Check balance")
        console.log("Your balance is:" + myBalance)
    }
else
{
    console.log("Incorrect Pin Code!")
}
