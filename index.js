const inquirer = require('inquirer');
const fs = require('fs');
function init() {

inquirer
    .prompt([
        {
            type:'input',
            name:'name',
            message:'Please enter your first and last name.',
        },
        {
            type:'input',
            name:'year',
            message:'Please enter the current year in YYYY format.',
        },
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
        let questions =
    `
## ${answer.title} ${licenseBadge(answer.license)}

## Description
${answer.description}

## Table of Contents:
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
* To install neccesary dependencies please run the following command:
${answer.installation}

## Usage
${answer.usage}

## License
${answer.license} Copyright: ${answer.name} ${answer.year}
<br/>
${licenseText(answer.license)}

## Contributing
${answer.contribution}

## Tests
* To run tests run the following command:
${answer.tests}

## Questions
Please reach out to me with any further questions via email at:
<br/>
${answer.email}
<br/>
You can follow my work at my Github listed below:
<br/>
${answer.username}

`;
        
    generateReadMe(fileName, questions)
    
});

}
    const fileName = 'generatedREADME.md';

    function generateReadMe(fileName, answer) {
        fs.writeFile(fileName, answer, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log('README generated!');
        });
    }

    function licenseBadge(license) {
    const mitBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    const apacheBadge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
    
    switch (license) {
        case "MIT":
            return mitBadge;
        case "Apache 2.0":
            return apacheBadge;
        default:
            return '';
        }
    }

    function licenseText(license) {
    const mitLicense = 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: <br/> <br/> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. <br/> <br/> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'

    const apacheLicense = 'Licensed under the Apache License, Version 2.0 (the "License"); <br/> you may not use this file except in compliance with the License. <br/> You may obtain a copy of the License at: <br/> http://www.apache.org/licenses/LICENSE-2.0 <br/> Unless required by applicable law or agreed to in writing, software <br/> distributed under the License is distributed on an "AS IS" BASIS, <br/> WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. <br/> See the License for the specific language governing permissions and <br/> limitations under the License.'
        
    switch (license) {
        case 'MIT':
            return mitLicense;
        case 'Apache 2.0':
            return apacheLicense;
        }
      }

init();