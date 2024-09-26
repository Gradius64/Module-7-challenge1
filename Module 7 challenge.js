///GIVEN a command-line application that accepts user input
const inquirer = require('inquirer');

console.log('my js');

////2 Ask for the user input

function askForInput() {
    inquirer.createPromptModule([
        {
            type: 'input',
            name: 'projectTitle',
            mesage: 'What is the title of your Project?',

        },
        
            {
                type: 'input',
                name: 'description',
                message: 'Please provide a description of your project:',
            },
            // Add more prompts as needed
        ])
        .then(answers => {
            console.log('Project Title:', answers.projectTitle);
            console.log('Description:', answers.description);
            // You can proceed to generate your README.md or other functionalities here
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }


    ///3 ask for project details
    
    // Start the application
    askForInput();

    const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the guidelines for contributing?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the instructions for testing?',
    },
];

inquirer.prompt(questions).then(answers => {
    console.log('Project Details:', answers);
    // Here you can add code to generate the README.md file using the answers
});

const inquirer = require('inquirer');

const licenses = [
    { name: 'MIT', value: 'MIT' },
    { name: 'GPL', value: 'GPL' },
    { name: 'Apache', value: 'Apache' },
    // Add more licenses as needed
];

inquirer.prompt([
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: licenses,
    }
]).then(answers => {
    const selectedLicense = answers.license;
    // Generate the badge and README section based on selectedLicense
    const badge = `![License](https://img.shields.io/badge/license-${selectedLicense}-blue.svg)`;
    const licenseSection = `## License\nThis project is licensed under the ${selectedLicense} License.`;

    // Add badge and license section to your README content
    console.log(badge);
    console.log(licenseSection);
});


/// 4

inquirer.prompt([
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: licenses,
    }
]).then(answers => {
    const selectedLicense = answers.license;

    // Generate the badge and license section
    const badge = `![License](https://img.shields.io/badge/license-${selectedLicense}-blue.svg)`;
    const licenseSection = `## License\nThis project is licensed under the ${selectedLicense} License.`;

    // Here you would add the badge and license section to your README content
    console.log(badge);
    console.log(licenseSection);
});

/// 5

const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    }
]).then(answers => {
    const githubProfileLink = `https://github.com/${answers.githubUsername}`;
    const questionsSection = `## Questions\nIf you have any questions, feel free to reach out:\n- GitHub: [${answers.githubUsername}](${githubProfileLink})\n- Email: ${answers.email}`;

    // Here you would add the questions section to your README content
    console.log(questionsSection);
});

///6 
//create a clickable Table of Contents 

const sections = [
    { title: 'Description', anchor: 'description' },
    { title: 'Table of Contents', anchor: 'table-of-contents' },
    { title: 'Installation', anchor: 'installation' },
    { title: 'Usage', anchor: 'usage' },
    { title: 'License', anchor: 'license' },
    { title: 'Contributing', anchor: 'contributing' },
    { title: 'Tests', anchor: 'tests' },
    { title: 'Questions', anchor: 'questions' },
];

  ///6 Generate the Table of Contents
let tableOfContents = '## Table of Contents\n';
sections.forEach(section => {
    tableOfContents += `- [${section.title}](#${section.anchor})\n`;
});

// Example of adding the Table of Contents to the README
console.log(tableOfContents);