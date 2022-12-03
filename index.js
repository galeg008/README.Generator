// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'list',
        message: 'What kind of license is your project using?',
        name: 'license',
        choices: [
            {name:'MIT', value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT"}, 
            {name:'Boost', value: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"}, 
            {name:'CC0', value: "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"},
             ]
    },
    {
        type: 'input',
        message: 'What is your project all about?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What is the list of contents?',
        name: 'Table of Contents'
    },
    {
        type: 'input',
        message: 'What is the process of installing?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is the usage?',
        name: 'usage'
    },
    {
        type:'input',
        message: 'Who is Contributing?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'testing'
    },
    {
        type: 'input',
        message: 'Please input your GitHub username',
        name: 'github'
    }, 
    {
        type: 'input',
        message: 'Please input your email',
        name: 'email'
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        const md = generateMarkdown(response)
        writeToFile('README.md', md )
    
    })

}

// Function call to initialize app
init();
