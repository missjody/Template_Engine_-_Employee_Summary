///////
// required

// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");

// const outputPath = path.resolve(__dirname, "output", "team.html");

// const render = require("./lib/htmlRenderer");


///////
//reusable function

// const validateId = id => (id <=0 || isNaN(id)) ? "Please enter a four digit employee ID number" : true;


///////
// Welcome message

// do we need to set it up that welcomeMessage then calls managerPrompt so that
// they don't go out of order ever?
// const welcomeMessage = 
console.log("Please build your engineering team: ");


///////
// various options 


// > If Engineer
//    call Engineer prompts engineerStart()
//    that in turn then calls secondPrompt again
// > Intern
//    call Intern prompts internStart()
//    that in turn calls secondPrompt again
// > I don't want to add any more team members, thanks
//    htmlRenderer()
//    calls the HTML generation and displays a message about that biz

// Sub prompt: Engineer
const engineerStart = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "What is your engineer's name?",
      name: "name"
    },
    {
      type: "number",
      message: "What is your engineer's ID number?",
      name: "id"
    },
    {
      type: "input",
      message: "What is your engineer's email address?",
      name: "email"
    },
    {
      type: "input",
      message: "What is your engineer's GitHub user name?",
      name: "github"
    }
  ]).then((prompt) => {
    secondPrompt();
  });
};


// Sub prompt: Intern
const internStart = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "What is your intern's name?",
      name: "name"
    },
    {
      type: "number",
      message: "What is your interns's ID number?",
      name: "id"
    },
    {
      type: "input",
      message: "What is your interns's email address?",
      name: "email"
    },
    {
      type: "input",
      message: "Where is your intern attending school?",
      name: "school"
    }
  ]).then((prompt) => {
    secondPrompt();
  });
};


// Sub prompt : I don't wanna
// break out and generate html
// console log that it is available to view
const htmlRenderer = () => {
  console.log("Your html has been Rendered!");
};

///////
// Second Prompt

const secondPrompt = () => {
  inquirer.prompt([
    // > Engineer
    // > Intern
    // > I don't want to add any more team members, thanks
    {
      type: "list",
      message: "Which type of team member would you like to add now?",
      choices: ["Engineer", "Intern", "I don't want to add any more team members, thanks!"],
      name: "action"
    }
  ]).then((prompt) => {
    switch (prompt.action) {
      case "Engineer":
        engineerStart();
        break;
      case "Intern":
        internStart();
        break;
      default:
        htmlRenderer();
        break;
    }
  });
};

///////
// First Prompt

const templateStart = () => {
  inquirer.prompt([
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
    },
    {
      type: "list",
      message: "Which type of team member would you like to add now?",
      choices: ["Engineer", "Intern", "I don't want to add any more team members, thanks!"],
      name: "action"
    }
  ]).then((prompt) => {
    //send prompt to make "new Manager"
    switch (prompt.action) {
      case "Engineer":
        engineerStart();
        break;
      case "Intern":
        internStart();
        break;
      default:
        htmlRenderer();
        break;
    }
  });
};


///////
// start the process

templateStart();