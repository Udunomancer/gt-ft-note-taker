// ===Importing required dependencies===
const fs = require("fs");
const path = require("path");
const db = path.join(__dirname, "../db/db.json");

// ===Getting notes currently saved to db===
let rawNotes = fs.readFileSync(db);
let savedNotes = JSON.parse(rawNotes);

// ===Exporting API route calls===
module.exports = function(app) {
    
    // ---GET /api/notes route to return all saved notes
    app.get("/api/notes", function(req, res) {
        //Return the notes array
        res.json(savedNotes[0]);
    });

    // ---POST /api/notes route to add a new note to saved notes---
    app.post("/api/notes", function(req, res) {
        //Get the user data from the request body
        let newNote = req.body;
        //Add an id to the new note data
        newNote.id = savedNotes[1].counter;
        savedNotes[1].counter++;
        //Add the new note to the notes array
        savedNotes[0].push(newNote);
        //Save the altered notes array to the db.json file
        fs.writeFileSync(db, JSON.stringify(savedNotes));
        //Return the new note data
        res.json(newNote);
    });

    // ---DELETE /api/notes/:id route to delete a note from the array
    app.delete("/api/notes/:id", function(req, res) {
        //Get the id of the note to delete
        let deleteID = parseInt(req.params.id);
        //Loop through the notes array
        for(let i = 0; i < savedNotes[0].length; i++) {
            //If the passed in id matches the id of the current note...
            if(deleteID === savedNotes[0][i].id) {
                //remove it
                savedNotes[0].splice(i, 1);
            }
        }
        //Return the altered notes array
        res.json(savedNotes[0]);
        //Save the altered notes array to the db.json file
        fs.writeFileSync(db, JSON.stringify(savedNotes));
    });
}