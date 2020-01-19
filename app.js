const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

///////

// First Prompt

//Please build your engineering team:
//What is your manager's name?
//takes in name 
//What is your manager's ID number? 
//takes in id
//What is your manager's email address? 
//takes in email
//What is your manager's office phone number?
//takes in phonenumber

//uses this information to create new Manager

//passes Manager to html generation

// ends series of questions and heads to the next prompt

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

  //

