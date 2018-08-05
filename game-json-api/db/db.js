const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/super_smashed_app");

mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected")
});

mongoose.connection.on("error", (err) => {
    console.log(err, "Mongoose failed to connect")
});

mongoose.connection.on("disconected", () => {
    console.log("Mongoose is disconnected")
});