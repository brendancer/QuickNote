const noteData = require("../db/db.json");
const { uuid } = require("uuidv4");

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
    let noteData = JSON.parse(data);
    let newNote = {
      id: uuid,
      title: req.body.title,
      text: req.body.text,
    };
    noteData.push(newNote);
    fs.writeFile("../db/db.json", JSON.stringify(noteData), (err) => {
      if (err) throw err;
      return res.json(noteData);
    });
  });

  app.delete("./api/notes", function (req, res) {
    fs.readFile("./db/db.json", function (err, data) {
      if (err) throw error;
      const upDatedArray = noteData.filter((item) => item.id != req.params.id);
      console.log(upDatedArray);
      fs.writeFile("./db/db.json", JSON.stringify(upDatedArray), function () {
        console.log(`${item} has been deleted`);
        return res.json(upDatedArray);
      });
    });
  });
};
