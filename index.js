const inquirer = require('inquirer');
const table = require('console.table');
const mysql = require('mysql');


const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '789456123',
    database: 'team_db'
  });

connection.connect(function(err) {
    if (err) {
        console.error('Unable to connect rip');
        return;
    }
    console.log('connected to database');

});

start();

//INQUIRER
function start() {
     inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'What do you want to do?',
        choices: [
                {name: 'View all employees',
                value: 'view_emp'},
                {name: 'Add employee',
                value: 'add_emp'},
                {name: 'Exit',
                value: 'exit'}]
            })
    .then (function(answers) {
        switch (answers.choice) {
            case 'view_emp':
            return viewEmployees()
     
            case 'add_emp':
            return addEmployee()
            
            default:
            return leave();
        }
    })
  };

 function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, data) {
        console.table(data);
        start();
    })
 };
 

function addEmployee() {
    console.log('ADD EMPL')
    start();
};

function leave() {
    console.log('Time for you to go.');
    process.exit();
}
