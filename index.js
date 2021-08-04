const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type:'input',
            name:'title',
            message:'What is the title of your project?',
        },
        {
            type:'input',
            name:'description',
            message:'Please provide a short description of your project.',
        },
        {
            type:'input',
            name:'installation',
            message:'Please briefly describe the installation instructions.',
            default:'npm install'
        },
        {
            type:'input',
            name:'usage',
            message:'What is the intended usage for the aforementioned project?.',
        },
        {
            type:'input',
            name:'contribution',
            message:'Please summarize guidelines for contribution.',
        },
        {
            type:'input',
            name:'tests',
            message:'Please indicate which/how to run testing via command.',
            default:'npm test'
        },
        {
            type:'list',
            name:'license',
            message:'Which type of license do you prefer for your project?',
            choices: [
                "MIT",
                "Apache 2.0",
                "IBM",
                "None"
            ]
        },
        {
            type:'input',
            name:'username',
            message:'What is your GitHub username?',
        },
        {
            type:'input',
            name:'email',
            message:'What is your email address?',
        },

    ])
