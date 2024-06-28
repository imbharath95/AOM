const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    userName : String,
    password : String,
    companyName : String,
    confirmpassword : String,
    phone : String,
    zip : String,
    address : String,
    city : String,
    email : String
});

module.exports = mongoose.model("user", userSchema);