// === ===
const fs = require("fs");
const path = require("path");

// === ===
let savedNotes = fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});