const exp = require("express");
const app = exp();

// MongoDB choqirish
const db = require('./server').db();

// 1) KIRISH code
app.use(exp.static('public'));
app.use(exp.json());
app.use(exp.urlencoded({ extended: true }));

// 2) SESSION code

// 3) VIEWS code
app.set("views", "views");
app.set("view engine", "ejs");

// 4) ROUTING code

module.exports = app;