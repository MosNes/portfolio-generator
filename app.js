const fs = require('fs');
const generatePage = require('./src/page-template');

//gets the arguments provided to the command line, minus the first two args (which are just the file paths to node and the app itself)
const profileDataArgs = process.argv.slice(2, process.argv.length);

//gets the first two items in the profileDataArgs array and assigns them to name and github
const [name, github] = profileDataArgs;

//creates the html file, throws an error if there's a problem
fs.writeFile('index.html',generatePage(name,github),err => {
    if (err) throw err;

    console.log('Portfolio Complete! Check out index.html to see the output!');
});