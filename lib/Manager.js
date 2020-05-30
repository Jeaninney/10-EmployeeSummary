// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager {
    constructor(employee, number) {
        this.employee = employee;
        this.job = "manager";
        this.officeNo = number;
    }
}

function validateEntry(entry){
    return entry !== '';
}

Manager.prototype.getInfo = function() {
    inquirer
        .prompt([
            {
                message: "What is your manager's name?",
                type: "input",
                name: "managerName",
                validate: validateEntry
            },{
                message: "What is your manager's id?",
                type: "input",
                name: "managerId",
                validate: validateEntry
            },{
                message: "What is your manager's email?",
                type: "input",
                name: "managerMail",
                validate: validateEntry
            },{
                message: "What is your manager's office number?",
                type: "input",
                name: "managerOffice",
                validate: validateEntry
            },

        ])    

}