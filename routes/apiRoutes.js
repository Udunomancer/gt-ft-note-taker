// === ===
const fs = require("fs");
const path = require("path");

// === ===
let rawNotes = fs.readFileSync(path.join(__dirname, "../db/db.json"));
let savedNotes = JSON.parse(rawNotes);

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(savedNotes);
    });
}