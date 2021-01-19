// ===SERVER SETUP===
// ---Importing required packages---
const express = require("express");
const fs = require("fs");

// ---Initialize Express app---
let app = express();
const PORT = process.env.PORT || 8080;

// ---Adding Middleware for data parsing---
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// ===ROUTES===
//require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// ===API ROUTES===
// ---GET all note objects---
// app.get("/api/notes", function(req, res) {
//     let allNotes = fs.readFile(path.join(__dirname, "db/db.json"));
//     return res.json
// })

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})