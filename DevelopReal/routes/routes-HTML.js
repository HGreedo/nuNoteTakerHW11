const path = require('path');
const expressRouter = require('express').Router();

expressRouter.get('/notes', (req, res) => { res.sendFile(path.join(__dirname, '../public/notes.html')); });

expressRouter.get('*', (req, res) => { res.sendFile(path.join(__dirname, '/..public/index.html')); });

module.exports = expressRouter;