const inquirer = require('inquirer');
const fs = require('fs');

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
       
