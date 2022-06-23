const inquirer = require('inquirer');



// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// //creates the html file, throws an error if there's a problem
// fs.writeFile('./index.html', pageHTML,err => {
//     if (err) throw err;

//     console.log('Portfolio Complete! Check out index.html to see the output!');
// });

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name5',
            message:    'What is your name?'
        }
    ])
    .then(answers => console.log(answers));