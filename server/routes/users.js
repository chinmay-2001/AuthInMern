const router = require("express").Router();
// const { User, validate } = require("../models/user");
const { student, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		console.log("1");
		const { error} = validate(req.body);//validation of user
		if (error)
			return res.status(400).send({ message: error.details[0].message });
		console.log("2")
		// const user = await User.findOne({ email: req.body.email });
		const user = await student.findOne({ email: req.body.email });  //for checking is user already exist
		console.log("3")
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });
		console.log("4")
		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);
		console.log(req.body)
		// const small=new student({firstName:req.body.firstName,lastname:req5.body.lastname,email:req.body.password,password:hashPassword});
		await new student({ ...req.body, password: hashPassword }).save();// user is created
		// small.save(function (err) {
		// 	console.log(err);
		// 	// saved!
		//   });
		console.log("5")
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
