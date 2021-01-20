// ===EXPRESS SERVER SETUP===
// ---Importing required packages---
const express = require("express");
const fs = require("fs");
const path = require("path");

// ---Initialize Express server---
let app = express();

// ---Set the PORT---
const PORT = process.env.PORT || 8080;

// ---Adding Middleware for data parsing---
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

// ===ROUTES===
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// ===LISTENER===
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})