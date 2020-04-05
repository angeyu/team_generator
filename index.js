const inquirer = require('inquirer');
const mysql = require('mysql')
const table = require('console.table')

const connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "PASSWORD",
    database: "team_db"
  });

  start();

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
            });
  };

 
