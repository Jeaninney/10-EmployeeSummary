// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

Employee.prototype.getInfo = function() {
    inquirer
        .prompt([
            {
                message: "Which type of team member would you like to add?",
                name: "employeeType",
                type: "list",
                choices: ["Engineer", "Intern", "I don't want to add any more"]
            }
        ]).then(function(answer){
            console.log(answer);
            return answer;
        }) 

}

module.exports = Employee;