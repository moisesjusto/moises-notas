const { Router } = require('express');
const router = Router();

const { getNotes, createNote, getNote, deleteNote, updateNote ,Polo,Pijamas,Vermuda,Vestidos,Blusas,Capris,Jeans,Playa,Comjuntos} = require('../controllers/notes.controller');

router.route('/')
    .get(getNotes)
    .post(createNote);

 router.route('/:id')
    .get(getNote)
    .delete(deleteNote)
    .put(updateNote);

    router.get('/polo',Polo);
    router.get('/vermuda',Vermuda);
    router.get('/pijama',Pijamas);
    router.get('/vestido',Vestidos);
    router.get('/blusa',Blusas);
    router.get('/capri',Capris);
    router.get('/jeans',Jeans);
    router.get('/playa',Playa);
    router.get('/comjunto',Comjuntos);
module.exports = router;


