const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for your project:',
    },
    {
      type: 'checkbox',
      name: 'tableOfContents',
      message: 'Select the sections you want to include in your table of contents:',
      choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter the usage information for your project:',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Enter the license information for your project:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter the contributing guidelines for your project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter the testing instructions for your project:',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Enter the frequently asked questions for your project:',
    },
  ])
  .then((answers) => {
    console.log(answers);
    // write the answers to a file or do something else with them
  })
  .catch((error) => {
    console.log(error);
  });

  const readme = `
  # ${answers.description}
  
  ${tableOfContents}
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage
  
  ${answers.usage}
  
  ## License
  
  ${answers.license}
  
  ## Contributing
  
  ${answers.contributing}
  
  ## Tests
  
  ${answers.tests}
  
  ## Questions
  
  ${answers.questions}
  `;

  fs.writeFile('README.md', readme, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md created successfully');
    }
  });