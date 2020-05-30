// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer {
    constructor(employee, gitHub, manager) {
        this.employee = new Employee(employee);
        this.manager = manager;
        this.job = "engineer";
        this.gitHub = gitHub;
    }
}

module.exports = Engineer;