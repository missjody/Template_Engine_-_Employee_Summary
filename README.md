# New Homework Instructions
For this homework you will build out the the files in the lib folder (except for the htmlRenderer). Use the test folder tests to build out the lib files. You will also build out the app.js file which when run will prompt the user for information about the team and on completion build out `team.html` in the `output` folder.  In your comments on submission write out an explanation of what the htmlRenderer file is doing.  

##### hint hint, the things we left in app.js we for a reason.

Welcome message
do we need to set it up that welcomeMessage then calls managerPrompt so that
they don't go out of order ever?

1-19 

846am
when we have the welcome message up and call it and the manager prompt
as functions, it shows the welcomeMessage, then managerPrompt's first question, but
immidiately breaks out of the application. Attempting it with just the inquirer, all else
commented out. It works fine that way, so how to we call multiple prompts in order? 

903am
* push questions into a variable
* call welcomeMessage
* call inquirer.prompt(questions)
* can write as inquirer.prompt(questions, function(answers) {
  when we're ready to pass elsewhere
})

example of phone number validation
 {
    type: "input",
    name: "phone",
    message: "What's your phone number",
    validate: function( value ) {
      var pass = value.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
      if (pass) {
        return true;
      } else {
        return "Please enter a valid phone number";
      }
    }
  },

  931am

  Can't get multiple prompts going, need to fully understand asynchonousity in order to move forward I believe. 

  1/20
  906
  console logging but from where?
  Role: Manager
Role: Engineer
Role: Intern
Name: [object Object]
Role: Manager
Email: undefined
Id: undefined
Role: Manager
Role: Engineer
Role: Intern
Name: [object Object]
Role: Engineer
Email: undefined
Id: undefined
Role: Manager
Role: Engineer
Role: Intern
Name: [object Object]
Role: Intern
Email: undefined
Id: undefined
Your html has been Rendered!




