const mongoose = require("mongoose");
// const mongoURI="mongodb+srv://snehal75:1306@testcluster1.5klwo.mongodb.net/Student_db?retryWrites=true&w=majority"
const mongoURI="mongodb+srv://chinmay:chinmay2001*@atlascluster.qla0xds.mongodb.net/Student_db?retryWrites=true&w=majority&ssl=true"

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
