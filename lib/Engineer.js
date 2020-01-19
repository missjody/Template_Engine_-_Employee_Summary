const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super();
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    this.role = "Engineer";
  }


  // getRole() {
  //   console.log(`Role: ${this.role}`);
  //   return this.role;
  // }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;