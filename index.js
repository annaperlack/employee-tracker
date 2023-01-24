const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2');
const consoleTable = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Hello89!',
        database: 'employees_db'
    },
);

db.connect((err) => {
    if (err) throw err;
    promptQuestions()
})

function promptQuestions() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choices',
                message: 'What would you like to do?',
                choices: [
                    { name: 'view all departments', value: 'departments' },
                    { name: 'view all roles', value: 'roles' },
                    { name: 'view all employees', value: 'employees' },
                    { name: 'add a department', value: 'addDepartment' },
                    { name: 'add a role', value: 'addRole' },
                    { name: 'add an employee', value: 'addEmployee' },
                    { name: 'update an employee role', value: 'updateEmployee' },
                ],
            },

        ])
        .then((answers) => {
            if (answers.choices == 'departments') {
                viewDepartments()
            } else if (answers.choices == 'roles') {
                viewRoles()
            } else if (answers.choices == 'employees') {
                viewEmployees()
            } else if (answers.choices == 'addDepartment') {
                addDepartment()
            } else if (answers.choices == 'addRole') {
                addRole()
            } else if (answers.choices == 'addEmployee') {
                addEmployee()
            } else if (answers.choices == 'updateEmployee') {
                updateEmployee()
            } else {

            }
        });
};

function viewDepartments() {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        console.table(result);
        promptQuestions();
    });
};

function viewRoles() {
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        console.table(result);
        promptQuestions();
    });
};
function viewEmployees() {
    const sql = `SELECT * FROM employees`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        console.table(result);
        promptQuestions();
    });
};

function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'department_name',
                message: 'What is name of the department name?'
            },
        ])
        .then((answers) => {
            console.log(answers)
            const sql = `INSERT INTO departments SET ?`;
            db.query(sql, answers, (err, result) => {
                if (err) {
                    throw err
                }
                console.table(result);
                promptQuestions();
            });
        })
};

function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'roleName',
                message: 'What is the role?'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary associated with this role?'
            },
            {
                type: 'input',
                name: 'roleId',
                message: 'What is the ID associated with this role?'
            },
        ])
        .then((answers) => {
            console.log(answers)
        })
};

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'What is the first name of the employee?'
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'What is the last name of the employee?'
            },
            {
                type: 'input',
                name: 'roleId',
                message: 'What is the role ID of the employee?'
            },
            {
                type: 'input',
                name: 'manager',
                message: 'Who is the manager of the employee?'
            },
        ])
        .then((answers) => {
            console.log(answers)
        })
};

function updateEmployee() {
    // find employee by ID and update role ID colum
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of the employee?'
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'What is the new role ID of the employee?'
            },
        ])
        .then((answers) => {
            const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
            const params = [answers.role_id, answers.id];
            db.query(sql, params, (err, result) => {
                if (err) {
                    throw err
                }
                console.table(result);
                promptQuestions();
            });
        })

};