//const noteData = require("./db/db.json");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

module.exports = function (app) {
  app.get("api/notes", function (req, res) {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      const savedNotes = JSON.parse(data);
      console.log(savedNotes);
      res.send(savedNotes);
    });
  });

  app.post("/api/notes", function (req, res) {
    const newNote = {
      id: uuidv4(),
      title: req.body.title,
      text: req.body.text,
    };

    fs.readFile("./db/db.json", function (err, data) {
      if (err) throw error;
      const savedNotes = JSON.parse(data);
      savedNotes.push(newNote);

      fs.writeFile("./db/db.json", JSON.stringify(savedNotes), (err) => {
        if (err) throw err;
        console.log("note noted!");
        return res.json(savedNotes);
      });
    });

    app.delete("/api/notes", function (req, res) {
      const deadNote = req.params.id;
      console.log(deadNote);
      fs.readFile("./db/db.json", function (err) {
        if (err) throw error;

        for (let i = 0; i < savedNotes.length; i++) {
          if (savedNotes[i].id === deadNote) {
            savedNotes.splice([i], 1);
          }
        }
        console.log(savedNotes);

        fs.writeFile("./db/db.json", JSON.stringify(savedNotes), (err) => {
          if (err) throw err;
        });
      });
    });
  });
};
