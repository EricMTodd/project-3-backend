const mongoose = require("mongoose");


const FighterSchema = mongoose.Schema({
    archetype: String,
    img: String,
    name: String,
    hp: Number,
    def: Number,
    str: Number,
    dex: Number,
    int: Number,
    minAtk: Number,
    maxAtk: Number
});


const Fighter = mongoose.model("Fighter", FighterSchema);
module.exports = Fighter;