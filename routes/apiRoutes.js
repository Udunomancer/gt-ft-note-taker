// === ===
const fs = require("fs");
const path = require("path");
const db = path.join(__dirname, "../db/db.json");

// === ===
let rawNotes = fs.readFileSync(db);
let savedNotes = JSON.parse(rawNotes);

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(savedNotes[0]);
    });

    app.post("/api/notes", function(req, res) {
        let newNote = req.body;
        newNote.id = savedNotes[1].counter;
        savedNotes[1].counter++;
        savedNotes[0].push(newNote);
        fs.writeFileSync(db, JSON.stringify(savedNotes));
        res.json(newNote);
    });

    app.delete("/api/notes/:id", function(req, res) {
        let deleteID = parseInt(req.params.id);
        
        for(let i = 0; i < savedNotes[0].length; i++) {
            if(deleteID === savedNotes[0][i].id) {
                savedNotes[0].splice(i, 1);
            }
        }

        res.json(savedNotes[0]);
        fs.writeFileSync(db, JSON.stringify(savedNotes));
    });
}