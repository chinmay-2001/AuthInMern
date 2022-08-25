const mongoose = require("mongoose");
const mongoURI="mongodb://localhost:27017"

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
