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
    doc = "";
    try {
        let currentFile = path.join(currentPath, 'data', 'sample.json')
        doc = fs.readFileSync(currentFile);
    }
    catch(err) {
        doc = err.message;
    }
    doc2 = "";
    try {
        let currentFile2 = path.join(currentPath, 'sample-data.json')
        doc2 = fs.readFileSync(currentFile2);
    }
    catch(err) {
        doc2 = err.message;
    }
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "a-nodejs-function TEST MESSAGE", files: fns, document: doc, document_2: doc2 }),
    };
};