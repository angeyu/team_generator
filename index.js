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
    inquirer.prompt([
        {type: 'input',
        name: 'first_name',
        message: 'Enter first name'
        },
        {type: 'input',
        name: 'last_name',
        message: 'Enter last name'
        },
        {type: 'input',
        name: 'role_id',
        message: 'Enter role ID'
        },
        {type: 'input',
        name: 'manager_id',
        message: 'Enter manager ID, or press ENTER if none'
        }
]).then(function(answer) {
    connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], function(err, data) {
        if (err) throw err;
        console.table('empoyee added');
        start();
    })
})
};

function leave() {
    console.log('Time for you to go.');
    process.exit();
}
