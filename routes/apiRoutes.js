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
        savedNotes.push(req.body);
        fs.writeFileSync(db, JSON.stringify(savedNotes));
        res.json(req.body);
    });

    app.delete("/api/notes/:id", function(req, res) {
        console.log("Delete");
        console.log(req);
        console.log(res);
    });
}