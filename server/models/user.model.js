const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        maxLength: [30, "Username should not be longer than 30 chars "]
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: "input a valid Email"
        }
    },
    password: {
        type:String,
        required: true,
        minLength: 7,
    },
    role: {
        type: String,
        required: true,
        default: "user",
        enum: ["user","moderator","admin"]
    }
},{timestamps:true});

module.exports = mongoose.model("User", userSchema);