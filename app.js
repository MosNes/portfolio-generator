//gets the arguments provided to the command line, minus the first two args (which are just the file paths to node and the app itself)
const profileDataArgs = process.argv.slice(2, process.argv.length);

//function that iterates through the array and console logs each item
// .forEach is a method that only works on arrays
const printProfileData = (profileDataArr) => {
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);