exports.handler = async function (event, context) {
    const fs = require('fs');
    let fns = [];
    const path = require("path");
    let currentPath = path.resolve(path.basename(__dirname))
    //let currentFile = path.join(currentPath, 'index.js')
    fs.readdir(currentPath, (err, files) => {
        files.forEach(file => {
            fns.push(file);
        });
    });
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "a-nodejs-function TEST MESSAGE", files: fns }),
    };
};