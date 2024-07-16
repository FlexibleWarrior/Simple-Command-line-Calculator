import inquirer from "inquirer";

const ans = await inquirer.prompt([{
    type : "number",
    name : "first_number",
    message: "Enter your first number"
},
{
    type : "number",
    name : "second_number",
    message: "Enter your second number"
},
{
    type: "list",
    name: "operators",
    message: "please select operation type: ",
    choices: ["Addition" , "Subtraction" , "Multiplication" , "Division"]
}])

if(ans.operators === "Addition" ){
    console.log(ans.first_number + ans.second_number);
}
else if(ans.operators === "Subtraction"){
    console.log(ans.first_number - ans.second_number);
}
else if(ans.operators === "Multiplication"){
    console.log(ans.first_number * ans.second_number);
}
else{
    console.log(ans.first_number / ans.second_number);
}

