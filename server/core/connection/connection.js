const MongoClient = require('mongodb').MongoClient;
const iniFile = require("../file/file").file("ini");

const url = "mongodb://root:rootpassword@localhost:3003/?authSource=admin";
console.log(iniFile.readFile(__dirname + "/config/config"));

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("huydv");
    dbo.createCollection("customers", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});