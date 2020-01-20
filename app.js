///////
// required

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//where we will be rendering to
const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];
let employeeId = [];


///////
//reusable function

// from bank example we set up on 1/7's review session
function validateId(input) {
  if (isNaN(input)) {
    return "Please enter a four digit employee ID number!";
  }
  for (i = 0; i < employeeId.length; i++) {
    if (input === employeeId[i]) {
      return "That ID number is already in use!"
    }
  }
  return true;
}


///////
// Welcome message

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
      name: "id",
      validate: validateId
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
    //create new engineer
    const newEngineer = new Engineer(prompt.name, prompt.id, prompt.email, prompt.github);

    //push it to an array of employees
    employees.push(newEngineer);
    employeeId.push(prompt.id);

    //start over again with secondPrompt()
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
      name: "id",
      validate: validateId
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
    const newIntern = new Intern(prompt.name, prompt.id, prompt.email, prompt.school);

    employees.push(newIntern);
    employeeId.push(prompt.id);

    secondPrompt();
  });
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
        // render();
        fs.writeFile(outputPath, render(employees), function (err) {
          if (err) {
            throw err;
          }
        });
        console.log("Your html has been rendered! Head over to the Output folder!");
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
      name: "id",
      //validate: function()
      validate: validateId
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

    const newManager = new Manager(prompt.name, prompt.id, prompt.email, prompt.officeNumber);

    employees.push(newManager);
    employeeId.push(prompt.id);

    switch (prompt.action) {
      case "Engineer":
        engineerStart();
        break;
      case "Intern":
        internStart();
        break;
      default:
        // render();
        fs.writeFile(outputPath, render(employees), function (err) {
          if (err) {
            throw err;
          }
        });
        console.log("Your html has been rendered! Head over to the Output folder!");
        break;
    }
  });
};


///////
// start the process

templateStart();