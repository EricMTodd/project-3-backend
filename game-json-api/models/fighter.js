const mongoose = require("mongoose");


const FighterSchema = mongoose.Schema({
    img: String,
    name: String,
    hp: Number,
    ac: Number,
    str: Number,
    dex: Number,
    int: Number,
    atk: Number
});


const Fighter = mongoose.model("Fighter", FighterSchema);
module.exports = Fighter;