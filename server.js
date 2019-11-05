// Dependencies and constiables

require("dotenv").config();
var mysql = require("mysql");
var express = require('express')
var PORT = process.env.PORT || 3001;
var app = express()
var models = require("./models");
var routes = require('./routes');



// Middleware
require('http-proxy-middleware');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Routes
app.use(routes);

//CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Set up MySQL connection for local access if server cannot access Jawsdb
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{

  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "paula",
    database: "realtears"
  });
}

//Listening for connection
app.listen(PORT, function(err) {
    if (!err)
        console.log("Site is live... Visit localhost:"+ PORT); 
    else console.log(err)
});


//Syncing models to db
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});

// Export connection for our ORM to use.
module.exports = connection;

 