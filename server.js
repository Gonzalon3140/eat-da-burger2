var express = require("express");
var app = express();
var PORT = process.env.PORT || 3113;
//var exphbs = require("express-handlebars");
var db = require("./models");
var path = require("path");


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//app.use(routes);
//app.engine("handlebars",exphbs({defaultLayout:"main"}));
//app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "/public")));

require("./controllers/burgers_controller")(app);

db.sequelize.sync({
    force: true
}).then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on: http://localhost: " + PORT);
    });
});