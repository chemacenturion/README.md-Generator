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
    .then((answer) => {
        console.log(response);
        let questions =
        `# ${answer.title}
        
        ## Description
        ${answer.description}

        ## Table of Contents:
        * [Installation](#Installation)
        * [Usage](#Usage)
        * [License](#License)
        * [Contributing](#Contributing)
        * [Tests](Tests)
        * [Questions](#Questions)

        ##Installation
        * To install neccesary dependencies please run the following command:
        ${answer.installation}

        ##Usage
        ${answer.usage}

        ##License
        ${answer.license}

        ##Contributing
        ${answer.contribution}

        ##Tests
        *To run tests run the following command:
        ${answer.tests}

        ##Questions
        Please reach out to me with any further questions!
        You can reach me via my contact info listed below:
        ${answer.username}
        ${answer.email}
        `;
        generateReadMe(fileName, questions)
    })

    const fileName = "README.md";

    function generateReadMe(fileName, answer) {
        fs.writeFile(fileName, answer, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log('Success!');
        });
    }

    init();