const inquirer = require('inquirer');
const mysql = require('mysql');
const table = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "789456123",
    database: "team_db"
  });


  start();
  viewEmployees();

  function start() {
      return inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'What do you want to do?',
        choices: [
                'View all employees',
                'View all departments',
                'Add employee',
                'Exit']
            })
    .then (function(resp) {
        switch (resp.action) {
            case 'View all employees':
            viewEmployees();
            break;

            case 'View all departments':
            viewDept();
            break;

            case 'Add employee':
            addEmployee();
            break;

            case 'Exit':
            leave();
            break;
        }
    })
  };

 function viewEmployees() {
     console.log('VIEW EMPL')
 };
 
 function viewDept() {

};

function addEmployee() {

};

function leave() {

};
