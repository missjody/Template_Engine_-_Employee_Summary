//new employe constructor, passing in id and email address
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }

  getName() {
    console.log(`Name: ${this.name}`);
    return this.name;
  }

  getId() {
    console.log(`Id: ${this.id}`);
    return this.id;
  }

  getEmail() {
    console.log(`Email: ${this.email}`);
    return this.email;
  }

  getRole() {
    console.log(`Role: ${this.role}`);
    return this.role;
  }
}

module.exports = Employee;

// const barb = new Employee(4351, "barb@email.com", "barb")
// console.log(barb);

// barb.getId();
// barb.getEmail();
// Employee.prototype.id = function (id) {
//   return new Employee(id);
// };

// Employee.prototype.email = function (email) {
//   return new Employee(email);
// };

// Employee.prototype.name = function (name) {
//   return new Employee(name);
// };
