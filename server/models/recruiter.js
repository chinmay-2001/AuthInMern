const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
	console.log("here");
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY2, {
		expiresIn: "7d",
	});
	return token;
};

const recruiter = mongoose.model("recruiter", userSchema);

// const validate = (data) => {
// 	console.log("123")
// 	const schema = Joi.object({
// 		job_id: Joi.string().required().label("First Name"),
// 		lastName: Joi.string().required().label("Last Name"),
// 		email: Joi.string().email().required().label("Email"),
// 		password: passwordComplexity().required().label("Password"),
// 	});
// 	console.log("456")
// 	return schema.validate(data);
// };

// module.exports = { recruiter, validate };
module.exports = { recruiter };
