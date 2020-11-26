const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  { type: 'input', message: 'What is your project title?', name: 'title'},
  { type: 'input', message: 'What is your project description?', name: 'description'},
  { type: 'input', message: 'What is your project description?', name: 'installation'},
  { type: 'input', message: 'What are your project installation instructions?', name: 'usage'},
  { type: 'input', message: 'What is your project usage information?', name: 'contributing'},
  { type: 'input', message: 'What are your project contribution guidelines?', name: 'title'},
  { type: 'input', message: 'What are your project test instructions?', name: 'tests'},
];

inquirer
  .prompt([
      questions
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });


// array of questions for user
//const questions = [];

// function to write README file
//function writeToFile(fileName, data) {}

// function to initialize program
//function init() {}

// function call to initialize program
//init();
