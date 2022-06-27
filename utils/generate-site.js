const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve,reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if theres an error, reject the promise and send the error to the promise's '.catch' method
            if (err) {
                reject(err);
                //return out of hte function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            //if everything went well, resolve the promise and send the successful data to the '.then()' method
            resolve({
                ok: true,
                message: 'File Created'
            });
        });
    });
};

const copyFile = fileContent => {
    return new Promise((resolve,reject) => {
        fs.copyFile('./src/style.css','./dist/style.css', err => {
            //if theres an error, reject the promise and send the error to the promise's '.catch' method
            if (err) {
                reject(err);
                return;
            }

            //if everything went well, resolve the promise and send the successful data to the '.then()' method
            resolve({
                ok: true,
                message: 'Stylesheet copied!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };
