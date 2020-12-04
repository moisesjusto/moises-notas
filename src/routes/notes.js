const { Router } = require('express');
const router = Router();

const { getNotes, createNote, getNote, deleteNote, updateNote , Busq} = require('../controllers/notes.controller');

router.route('/')
    .get(getNotes)
    .post(createNote);

 router.route('/:id')
    .get(getNote)
    .delete(deleteNote)
    .put(updateNote);

    router.get('/Busq/:id',Busq);

module.exports = router;


