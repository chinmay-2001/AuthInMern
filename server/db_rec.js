const mongoose = require("mongoose");
const mongoURI="mongodb+srv://snehal75:1306@testcluster1.5klwo.mongodb.net/Recruiter?retryWrites=true&w=majority"

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		// mongoose.connect(process.env.DB, connectionParams);
		mongoose.connect(mongoURI,connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
