const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super();
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  getOffice() {
    return this.officeNumber;
  }

}

module.exports = Manager;