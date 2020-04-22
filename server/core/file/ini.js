let fs = require('fs');
let ini = require('ini');

let readFile = (path) => {
    // read config file
    let config = ini.parse(fs.readFileSync(path + ".ini", 'utf-8'))
    return config;
};

exports.readFile = readFile;
