const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
let OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

console.log(`testing ${outputPath}`);
const render = require("./lib/htmlRenderer");

const employeeArray = [];
let id = 1;
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function init() {
    inquirer.prompt([
        {
            message: "Which type of team member would you like to add?",
            name: "employeeType",
            type: "list",
            choices: ["Manager", "Engineer", "Intern", "Quit"]
        }
    ]).then(function (answer) {
        if (answer.employeeType === "Manager") {
            addManager();
        } else if (answer.employeeType === "Engineer") {
            addEngineer();
        } else if (answer.employeeType === "Intern") {
            addIntern();
        } else {
            writeHTML(employeeArray);
        }
    });
};

function addManager() {
    inquirer.prompt([
        {
            message: "What is your manager's name?",
            name: "name",
            type: "input"
        }, {
            message: "What is your manager's email address?",
            name: "email",
            type: "input"
        }, {
            message: "What is your manager's office number?",
            name: "officeNum",
            type: "input"
        },

    ]).then(answer => {
        const manager = new Manager(answer.name, id++, answer.email, answer.officeNum);
        employeeArray.push(manager);
        init();
    })
}
function addEngineer() {
    inquirer.prompt([
        {
            message: "What's your engineer's name?",
            name: "name",
            type: "input"
        }, {
            message: "What's your engineer's email?",
            name: "email",
            type: "input"
        }, {
            message: "What's your engineer's GitHub?",
            name: "gitHub",
            type: "input"
        },
    ]).then(answer => {
        const engineer = new Engineer(answer.name, id++, answer.email, answer.gitHub);
        employeeArray.push(engineer);
        init();
    })
}
function addIntern() {
    inquirer.prompt([
        {
            message: "What's your intern's name?",
            name: "name",
            type: "input"
        }, {
            message: "What's your intern's email?",
            name: "email",
            type: "input"
        }, {
            message: "What's your intern's school?",
            name: "school",
            type: "input"
        },
    ]).then(answer => {
        const intern = new Intern(answer.name, id++, answer.email, answer.school);
        employeeArray.push(intern);
        init();
    })
}
function writeHTML() {
		console.log(`Final ${employeeArray}`);
		fs.writeFile(outputPath, render(employeeArray), function(err) {
			if (err) {
				return console.log(err);
			}
			console.log("Success!");
		})	
}

init();
console.log(`Final ${employeeArray}`);


