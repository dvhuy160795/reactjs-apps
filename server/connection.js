var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://root:rootpassword@localhost:3003/?authSource=admin";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("huydv");
    dbo.createCollection("customers", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});