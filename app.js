// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");

// const outputPath = path.resolve(__dirname, "output", "team.html");

// const render = require("./lib/htmlRenderer");

// Welcome message
// do we need to set it up that welcomeMessage then calls managerPrompt so that
// they don't go out of order ever?
// const welcomeMessage = 

console.log("Please build your engineering team: ");

///////

// First Prompt
const managerPrompts = [
  //takes in name 
  {
    type: "input",
    message: "What is your manager's name?",
    name: "name"
  },
  //takes in id, if it's NaN it just lets you continue with NaN, no catch
  {
    type: "number",
    message: "What is your manager's ID number?",
    name: "id"
    //validate: function()
  },
  //takes in email
  {
    type: "input",
    message: "What is your manager's email address?",
    name: "email"
  },
  //takes in phonenumber
  {
    type: "number",
    message: "What is your manager's office phone number?",
    name: "officeNumber"
  }
];


// .then(function (response) {

//uses this information to create new Manager
//passes Manager to html generation
// ends series of questions and heads to the next prompt
// teamPrompt(response);
// });

inquirer.prompt(managerPrompts);


///////

// Second Prompt

//Which type of team member would you like to add now? 
// > Engineer
// > Intern
// > I don't want to add any more team members, thanks

// Sub prompt: Engineer

//What is your engineer's name?
//takes in name 
//What is your engineer's ID number? 
//takes in id
//What is your engineer's email address? 
//takes in email
//What is your engineer's GitHub user name?
//takes in github

// Sub prompt: Intern

//What is your intern's name?
//takes in name 
//What is your intern's ID number? 
//takes in id
//What is your intern's email address? 
//takes in email
//Where is your intern attending school?
//takes in github

// Sub prompt : I don't wanna

// break out and generate html
// console log that it is available to view



// call prompts in order?
// welcomeMessage();
// managerPrompt();

