var express = require("express");
var exhb = require("express-handlebars");
var app = express();
var db = require("../models");

app.engine("handlebars", exhb({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

module.exports = function (app) {
    app.get("/", function (req, res0) {
        db.burger.findAll({}).then(function (dbburger)) {
            res0.json(dbburger);
        }
    });
};

app.post("/", function (req, res) {
    db.burger.create({
        burger_name: req.body.burger_name,
        devoured: false
    }).then(function (dbburger) {
        res.render("index", dbburger)
    })
});

app.put("/:id", function (req, res1) {

})