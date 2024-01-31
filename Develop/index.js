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
        choices: ['MIT', 'Apache', 'Boost', 'Mozilla', 'None'],
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

// Function that creates and writes the readme file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) =>
        err ? console.error(err) : console.log('README Created')
    )
}

// Initialize function
function init() {
    inquirer
        .prompt(questions).then((answers) => {
        //console.log(answers);
        const readmeContent = generateMarkdown(answers);
        //console.log(readmeContent);
        writeToFile(readmeContent);


      })
}

// Function call to initialize app
init();
