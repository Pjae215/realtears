"use strict";
//sequelize variables and dependencies for db config
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename  = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require("../config.json")[env];
var db = {};

//Sequelize will access local server if prod env is not accessible
if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }
 
//synchronously reading js files in models folder not including this file (index.js)
    fs.readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== basename) & (file.slice(-3) === '.js');
    })
    .forEach(function(file) {
        var model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
        console.log(file);
      });

//For each model export with an associate method (hasMany, belongsTo etc..) as an object to the database
Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
 
//Instances of both the Sequelize and sequelize libraries are exported to the db
db.sequelize = sequelize;
db.Sequelize = Sequelize;
 
module.exports = db;