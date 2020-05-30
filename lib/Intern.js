// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern {
    constructor(employee, school, manager) {
        this.employee = new Employee(employee);
        this.manager = manager;
        this.job = "intern";
        this.school = school;
    }
}

module.exports = Intern;