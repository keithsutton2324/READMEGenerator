const inquirer = require('inquirer');
const fs = require('fs');
const { profile } = require('console');

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
    var READMEtxt = `
# Title: ${data.title}

## Developed By: ${data.contributors}

## Table of Contents:
* [Description: ](#description)
* [Installation: ](#installation)
* [Usage: ](#usage) 
* [Testing: ](#testing) 
* [License: ](#license) 
* [Developer Profile: ](#profile) 
* [Contact Information: ](#contact) 

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Testing
${data.testing}

## License
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Profile
![https://github.com/keithsutton2324](https://github.com/keithsutton2324)

## Contact
If you have questions feel free to reach me at: ${data.address}
    `
console.log(READMEtxt)    

    fs.writeFileSync("README.md", READMEtxt, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
}

// function call to initialize program
init();
