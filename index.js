//required packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require ('./utils/generateMD');
//questions to generate answers to specific template
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'Describe',
        message: 'Description of your project?',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Installation requirements?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Instructions for Usage?',
    },
    {
        type: 'list',
        name: 'License',
        choices: ['Apache License 2.0', ' MIT License', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0'],
        message: 'Which license did you use?',
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'Are there any contributors to your project?'
    },
    {
        type: 'input',
        name: 'Github',
        message: 'Your GitHub username?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Your Email address?.',
    },
];


//function to write the inputed responses to the template
    function writeToFile (fileName, data) {
        return fs.writeFileSync(fileName, data)
    };

    console.log("ReadME has been generated");

    function init () {
        inquirer.prompt(questions).then((response) => {
            console.log(generateMD(response));
        
            writeToFile("ReadME.md", generateMD(response));
    });
}
//function to initialize
init();