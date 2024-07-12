'#! /usr/bin/env node '

import inquirer  from "inquirer";

let myBalance = 10000;

console.log(myBalance);
let myPin = 1234;
    console.log("welcome to IB_ATM machine");
let pinAnswer = await inquirer.prompt([
    {      name : 'pin',
        message : 'enter your pin!',
        type : 'number'


    }
]);
  if (pinAnswer.pin === myPin){
    console.log("correct pin code!!");
    

    let operationAns = await inquirer.prompt(
        [
            {name : 'operation',
                message : 'please select option',
                type : 'list',
                choices : ['withdraw','check balance']

            }
        ]
    );

    console.log(operationAns);
    if (operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {

                name : 'amount',
                message : 'enter your amount',
                type : "number"

            }

            ])

        if(amountAns.amount>myBalance){

        console.log("insufficient balance");
    }else{ myBalance -= amountAns.amount;
    console.log(`${amountAns.amount} withdraw successfully `);
    console.log(`your remaining balance is:${myBalance}`);
}




    }else if(operationAns.operation==="check balance")
        console.log(`your account balance is ${myBalance}`);


  }
  else{console.log("pin is incorrect,Try again!");

  }