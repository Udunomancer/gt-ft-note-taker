// ===SERVER SETUP===
// ---Importing required packages---
const express = require("express");
const path = require("path");

// ---Initialize Express app---
let app = express();
const PORT = 3000;

// ---Adding Middleware for data parsing---
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// ===ROUTES===
// ---Basic route to main page---
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
})

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})