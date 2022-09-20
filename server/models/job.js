const mongoose=require('mongoose')
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    Company: { type: String, required: true },
    Title: { type: String, required: true },

    date: { type: Date, required: true },
},

);

const job = mongoose.model("job", userSchema);

module.exports = { job };
