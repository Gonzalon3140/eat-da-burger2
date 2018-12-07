const express = require("express");
var app = express();
var PORT = process.env.PORT || 4000;
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller");
var path = require("path");


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(routes);
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "/public")));

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost: " + PORT);
    // log server activity in external file
});