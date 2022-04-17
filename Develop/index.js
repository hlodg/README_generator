// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMark= require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
        {
          type: 'input',
          name: 'name',
          message: 'What is your application name?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Please describe your project.',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'What should you use it for?',
        },
        {
          type: 'input',
          name: 'installation',
          message: 'How do you install it?',
        }, 
        {
          type: 'input',
          name: 'credits',
          message: 'Who else worked on this project with you?',
        },
        {
          type: "list",
          name: "licenseName",
          message: "Choose your license:",
          choices: ["MIT", "GPLv2", "Apache"],
        }
      ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  try {
    fs.writeFileSync(fileName, data)
  } catch (error) {
      console.log(error)
  }
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers)=>{
            const data = generateMark(answers)
            // console.log(answers)
            // console.log (data)
            writeToFile('readMe.md', data)
        });
}

// Function call to initialize app
init();

