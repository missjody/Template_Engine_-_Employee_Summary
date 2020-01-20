const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super();
    this.name = name;
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

}

module.exports = Manager;