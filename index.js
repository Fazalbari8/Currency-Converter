import inquirer from "inquirer";
//In PKR
let conversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0037,
        "PKR": 1
    },
    //In GBP
    "GBP": {
        "USD": 1.21,
        "PKR": 350,
        "GBP": 1
    },
    //In Dollar
    "USD": {
        "PKR": 227.58,
        "GBP": 0.83,
        "USD": 1
    }
};
// STEP 2 : Using Inquirer
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your Currency...?"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Selet your conversion Currency"
    },
    // conversion amount
    {
        type: "number",
        name: "amount",
        message: "Enter your conversion amount"
    }
]);
//Step 3 output
const { from, to, amount } = answer;
//check input in given programs
if (from && to && amount) {
    //formula
    let result = conversion[from][to] * amount;
    console.log(`you conversion from ${from} to${to} is ${result}`);
}
else {
    // generate error 
    console.log("invalid input");
}
