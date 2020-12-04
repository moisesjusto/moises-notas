const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
    {
        id: { type: String},
        name: { type: String},
        imgs: { type: String},
        precio: { type: String},
        categoria: { type: String},
        descripsion: { type: String},
        
    }, {
        timestamps: true
    });

module.exports = model('Note', noteSchema);
