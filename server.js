const express = require("express");

let app = express();
const PORT = 3000;

app.get("/", function(req, res) {
    res.send("Welcome to the Note Taker");
})

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})