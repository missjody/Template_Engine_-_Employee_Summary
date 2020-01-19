const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super();
    this.name = name;
    this.id = id;
    this.email = email;
    this.gitHub = gitHub;
    this.role = "Engineer";
  }


  getRole() {
    console.log(`Role: ${this.role}`);
    return this.role;
  }

  getGithub() {
    return this.gitHub;
  }
}

module.exports = Engineer;