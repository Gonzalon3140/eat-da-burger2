var db = {};
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(_filename);
var env = process.env.NODE_ENV || 'development';
var config = require(_dirname + "/../config/config.json")[env];

var Sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(_dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === ".js");
    })
    .forEach(file => {
        var model = sequelize["import"](path.join(_dirname, file));
        db[model.name] = model;
    });
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.sequelize = sequelize;

module.exports = db;