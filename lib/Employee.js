// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;

// Employee.prototype.getInfo = function() {
//     inquirer
//         .prompt([
//             {
//                 message: "Which type of team member would you like to add?",
//                 name: "employeeType",
//                 type: "list",
//                 choices: ["Engineer", "Intern", "I don't want to add any more"]
//             }
//         ]).then(function(answer){
//             console.log(answer);
//             return answer;
//         }) 

// }

// Employee.prototype.getName = function() {
//     inquirer
//         .prompt([
//             {
//                 message:"What is your EMPLOYEE's name?",
//                 name: "employeeName",
//                 type: "input"
//             }
//         ]).then(function(answer){
//             this.name = answer.name;
//         })

//         // ]).then(function(answer){
//         //     console.log(answer);
//         //     return answer;
//         // })
// }
