console.log("web serverni boshlash");
const exp = require("express");
const app = exp();
const router = require("./router")

// MongoDB choqirish
const db = require('./server').db();

// 1) KIRISH code (use)
app.use(exp.static('public'));
app.use(exp.json());
app.use(exp.urlencoded({ extended: true }));

// 2) SESSION code (?)

// 3) VIEWS code (set)
app.set("views", "views");
app.set("view engine", "ejs");

// 4) ROUTING code (get, post)
app.use("/", router);

module.exports = app;