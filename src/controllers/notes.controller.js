const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

notesCtrl.createNote = async (req, res) => {
    const { 
        id,
        name,
        imgs,
        precio,
        categoria,
        descripsion 
    } = req.body;

    const newNote = new Note({
        id,
        name,
        imgs,
        precio,
        categoria,
        descripsion
    });
    await newNote.save();
    res.json('New Note added');
};

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json('Note Deleted');
}

notesCtrl.updateNote = async (req, res) => {
    const { 
        name,
        id,
        imgs,
        precio,
        categoria,
        descripsion
     } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        imgs,
        name,
        id,
        precio,
        categoria,
        descripsion
    });
    res.json('Note Updated');
}

notesCtrl.Busq= async (req,res)=>{
    const B = req.params.id;
    const Res = await Note.find({name:`${B}`})
    res.json(Res);
};




module.exports = notesCtrl;