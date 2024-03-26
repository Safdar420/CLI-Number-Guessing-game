#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber =Math.floor(Math.random() * 6+1);
const answer = await inquirer.prompt([
    {    
     message:"please guess a number between 1-6",
     name:"userGuessedNumber",
     type:"number",   
    }
])
console.log(answer);
if(answer.userGuessedNumber === randomNumber){
    console.log("congratulation you guess right number");  
}else{
    console.log("you lost this game");  
}
