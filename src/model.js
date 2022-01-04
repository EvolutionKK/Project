const mongoose = require("mongoose");

const inputSchema = {
    fullname: String,
    email: String,
    username: String
}

const Note = mongoose.model("Note", inputSchema);

module.exports = Note;