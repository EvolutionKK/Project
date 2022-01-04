const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser())
app.use(express.json());

mongoose.connect("mongodb+srv://karan:1234@cluster0.t4q3i.mongodb.net/edneedDB?retryWrites=true&w=majority")


app.use("/", require("./route"));


app.listen(3001, function(){
    console.log("Server is listening on Port 3001")
})