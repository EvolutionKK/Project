const express = require("express");
const router = express.Router();
const Note = require("./model")

router.route("/home").post((req,res) => {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const username = req.body.username;

    const newInput = new Note({
        fullname,
        email,
        username
    })
    // console.log(newInput)
    newInput.save();
});

router.route("/next").get((req,res)=>{
    Note.find().then(found => res.json(found))
})


module.exports = router;