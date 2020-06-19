const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
   return inquirer.prompt([
        {
            message: "Welcome to the README.md generator!",
            name: "welcome",
            type: "input",
        },
        {
            message: "What is the name of your project?",
            name: "project",
            type: "input,"
        },
        {
            message: "Enter a description of your project:",
            name: "description",
            type: "input",
        },
        {
            message: "Enter the steps for installing your project:",
            name: "installation",
            type: "input",
        },
        {
            message: "How do you use your project? Provide examples",
            name: "usage",
            type: "input",
        },
        {
            message: "Does your project have a license? If so, please enter the name of the license",
            name: "license",
            type: "input",
        },
        {
            message: "How can users contribute to your project?",
            name: "contributing",
            type: "input",
        },
        {
            message: "Enter your Github username:",
            name: "username",
            type: "input",
        },
        {
            message: "Enter the link to your project:",
            name: "link",
            type: "input",
        },
        {
            message: "How would users leave a question?",
            name: "questions",
            type: "input",
        },
        {
            message: "Does your project need a badge? If so, enter the name of one.",
            name: "badges",
            type: "input",
        },
    ]);
}


function generateReadMe(answers) {
    return `# ${answers.project}
    [![GitHub version](https://badge.fury.io/gh/boennemann%2Fbadges.svg)](http://badge.fury.io/gh/boennemann%2Fbadges)
    ## Description
        ${answers.description}
    ## Table of Contents
    
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)

    ## Installation

        ${answers.installation}

    ## Usage

        ${answers.usage}

    ## License

        ${answers.license}

    ## Contributing

        ${answers.contributing}
        Github username: ${answers.user-info}
    
    ## Tests

    ## Questions

        ${answers.questions}`
    
}

promptUser()
    .then(function(answers) {
        const readme = generateReadMe(answers);

        return writeFileAsync("README.md", readme);
    })
    .then(function() {
        console.log("README generated successfully!")
    })
    .catch(function(err){
       console.log(err)
    }
    );