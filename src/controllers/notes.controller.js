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

notesCtrl.Polo= async (req,res)=>{
    const Res = await Note.find({name:'Polo'})
    res.json(Res);
};
notesCtrl.Blusas= async (req,res)=>{
    const Res = await Note.find({name:'blusa'})
    res.json(Res);
};
notesCtrl.Jeans= async (req,res)=>{
    const Res = await Note.find({name:'jeans'})
    res.json(Res);
};
notesCtrl.Playa= async (req,res)=>{
    const Res = await Note.find({name:'playa'})
    res.json(Res);
};
notesCtrl.Vermuda= async (req,res)=>{
    const Res = await Note.find({name:'vermuda'})
    res.json(Res);
};
notesCtrl.Capris= async (req,res)=>{
    const Res = await Note.find({name:'capri'})
    res.json(Res);
};
notesCtrl.Pijamas= async (req,res)=>{
    const Res = await Note.find({name:'pijama'})
    res.json(Res);
};
notesCtrl.Vestidos= async (req,res)=>{
    const Res = await Note.find({name:'vestido'})
    res.json(Res);
};
notesCtrl.Comjuntos= async (req,res)=>{
    const Res = await Note.find({name:'comjunto'})
    res.json(Res);
};


module.exports = notesCtrl;