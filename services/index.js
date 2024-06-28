
require("./db/connection.js")
const cors = require('cors')
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;
const User = require("./models/Register.js");    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
// creating api for register form
app.get("/login", async(req, res) => {
    res.send("success")
})
app.post("/signup", async(req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    console.log(req.body);
    res.send(result);
})


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})