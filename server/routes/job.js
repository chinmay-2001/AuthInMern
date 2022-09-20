const router = require("express").Router();
const{ job } =require("../models/job")

router.post("/", async (req, res) => {
	try {
		// const { error } = validate(req.body);
		// if (error)
		// 	return res.status(400).send({ message: error.details[0].message });

		// const user = await User.findOne({ email: req.body.email });
		console.log("1")
		// console.log({ email: req.body.email })
		// const user = await recruiter.findOne({ email: req.body.email });
		// console.log("2")
		// if (user)
		// 	return res
		// 		.status(409)
		// 		.send({ message: "User with given email already Exist!" });
		// console.log("3")

		// const salt = await bcrypt.genSalt(Number(process.env.SALT));
		// const hashPassword = await bcrypt.hash(req.body.password, salt);
		// console.log(req.body)
		// const small=new student({firstName:req.body.firstName,lastname:req.body.lastname,email:req.body.password,password:hashPassword});
		console.log(req.body);
		await new job({...req.body }).save(function(err,result){
			if(err){
				console.log(err);
			}
			else{
				console.log(result);
			}
		});
		// small.save(function (err) {
		// 	console.log(err);
		// 	// saved!
		//   });
		// res.status(201).send({ message: "Job Added successfully" });
		// alert("your job is added")
		console.log("job added successfully")
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
