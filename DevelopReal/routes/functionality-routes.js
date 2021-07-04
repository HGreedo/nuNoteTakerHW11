const expressRouter = require('express').Router();
const noteStorage = require('../db/note-manager');

expressRouter.get('/notes', (req, res) => {
    noteStorage 
        .returnAllNotes().then((noteStorage) => {
            return res.json(noteStorage);
        }); 
        if (err) { console.log(err) }
    });

expressRouter.post('/notes', (req, res) => {
    noteStorage
        .addNote(req.body).then((singleNote) => res.json(singleNote))
        if (err) { console.log(err) }
});

expressRouter.delete('/notes/:id', (req, res) => { noteStorage.removeSingleNote(req.params.id).then(() => res.json({ deleted: true}));
if (err) { console.log(err) }
});

module.exports = expressRouter;