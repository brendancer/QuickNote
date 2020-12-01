const noteData = require("../db/db.json");
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
    console.log(newNote);
    fs.readFile("./db/db.json", function (err, data) {
      if (err) throw error;
      const savedNotes = JSON.parse(data);
      console.log(savedNotes);
      savedNotes.push(newNote);
      console.log(savedNotes);
      fs.writeFile("./db/db.json", JSON.stringify(savedNotes), (err) => {
        if (err) throw err;
        console.log("note noted!");
        return res.json(noteData);
      });
    });

    app.delete("/api/notes", function (req, res) {
      fs.readFile("./db/db.json", function (err, data) {
        if (err) throw error;
        const upDatedArray = noteData.filter(
          (item) => item.id != req.params.id
        );
        console.log(upDatedArray);
        fs.writeFile("./db/db.json", JSON.stringify(upDatedArray), function () {
          console.log(`${item} has been deleted`);
          return res.json(upDatedArray);
        });
      });
    });
  });
};
