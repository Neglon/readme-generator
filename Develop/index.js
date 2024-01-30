//packages needed for the readme generator
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//object array with questions for the user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give a description of the project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use the project?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How can other people contribute to the project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How can the project be tested?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Academic Free License v3.0', 'Apache 2.0', 'Microsoft Public License'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
