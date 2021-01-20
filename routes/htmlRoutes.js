// ===Importing required dependencies===
var path = require("path");

// ===Exporting HTML route calls===
module.exports = function(app) {
    // ---GET /notes route to return the notes.html page
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // ---GET * route to return index.html for non-listed routes
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}