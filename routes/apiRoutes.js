// === ===
const fs = require("fs");
const path = require("path");
const db = path.join(__dirname, "../db/db.json");

// === ===
let rawNotes = fs.readFileSync(db);
let savedNotes = JSON.parse(rawNotes);

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(savedNotes);
    });

    app.post("/api/notes", function(req, res) {
        let newNote = req.body;
        newNote.id = savedNotes.length + 1;
        savedNotes.push(newNote);
        fs.writeFileSync(db, JSON.stringify(savedNotes));
        res.json(newNote);
    });

    app.delete("/api/notes/:id", function(req, res) {
        console.log(req.body);
    });
}