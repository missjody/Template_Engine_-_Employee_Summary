//new employe constructor, passing in id and email address
function Employee(id, email, name) {
  this.id = id;
  this.email = email;
  this.name = name;
}

Employee.prototype.base = function (id, email) {
  const newEmployee = {
    id,
    email,
    name
  };

  return new Employee(newEmployee);
};

module.exports = Employee;