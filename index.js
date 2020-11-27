const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [
  { type: 'input', message: 'What is your project title?', name: 'title'},
  { type: 'input', message: 'What is your project description?', name: 'description'},
  { type: 'input', message: 'What is your project installation?', name: 'installation'},
  { type: 'input', message: 'What are your project usage', name: 'usage'},
  { type: 'input', message: 'Who are your project contributors?', name: 'contributors'},
  { type: 'input', message: 'What are your project testing requirements?', name: 'testing'},
  { type: 'list', message: 'What is the project license?', name: 'license', choices: ["ISC", "MIT", "APPACHE 2.0", "NONE"]},
  { type: 'input', message: 'What is your project GitHub username?', name: 'username'},
  { type: 'input', message: 'What is your project email address?', name: 'address'},
];

// function to write README file
//function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer
  .prompt(
      questions
  )
  .then((data) => { console.log(data)
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    // );
  });
}

// function call to initialize program
init();
