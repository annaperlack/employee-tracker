const inquirer = require('inquirer');
const fs = require('fs');
const consoleTable = require('console.table');

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
        if (answers.choices == 'department') {
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

function viewDepartments() {
    const table = consoleTable.getTable([
       
      ]);
};
function viewRoles() {

};
function viewEmployees() {

};

function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'departmentName',
                message: 'What is name of the department?'
            },
        ])
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
};

function updateEmployee() {

};