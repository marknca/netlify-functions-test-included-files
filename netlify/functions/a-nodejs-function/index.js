exports.handler = async function (event, context) {
    const fs = require('fs');
    let fns = [];
    const path = require("path");
    let currentPath = path.resolve(path.basename(__dirname))
    fs.readdir(currentPath, (err, files) => {
        files.forEach(file => {
            fns.push(file);
        });
    });
    let docs = [];
    [
    './data/sample.json',
    path.join(currentPath, 'data', 'sample.json'),
    '/data/sample.json',
    './sample-data.json',
    path.join(currentPath, 'sample-data.json'),
    'sample-data.json',
    ].forEach(function(path) {
        resultFromPath = ""
        try {
            resultFromPath = fs.readFileSync(path);
        }
        catch(err) {
            resultFromPath = err.message;
        }
        docs.push({ "path": path, "result": resultFromPath})
    });
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "a-nodejs-function TEST MESSAGE", files: fns, documents: docs }),
    };
};