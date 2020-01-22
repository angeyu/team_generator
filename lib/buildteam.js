const inquirer = require("inquirer");
const fs = require("fs");
const employee = require("./Employee");
const manager = require("./Manager");
const engineer = require("./Engineer");
const intern = require("./Intern");

// const questions = []
// //employee
// {
//     type: "list",
//     name: "type",
//     message: "Select the team member's role:",
//     choices: ["manager", "engineer", "intern"]
//   },
//   {
//     type: "input",
//     name: "name",
//     message: "Enter name:",
//     validate: (text) => {
//       if (text === "") {
//           return "Please enter a name";
//       }

//       return true;
//   }
// ]; //questions
    

inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  });


function create_manager() {
  inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  });

};


