const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
    {
        id: { type: String},
        name: { type: String},
        imgs: { type: String, required: true},
        precio: { type: String, required: true},
        categoria: { type: String, required: true},
        descripsion: { type: String, required: true},
        
    }, {
        timestamps: true
    });

module.exports = model('Note', noteSchema);