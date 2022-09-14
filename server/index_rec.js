require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db_rec");
// const userRoutes = require("./routes/users");
const authRoutes = require("./routes/authrec");
const recRoutes =require("./routes/recruiter")

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
// app.use("/api/users", userRoutes);
app.use("/api/recruiter", recRoutes);
app.use("/api/authr", authRoutes);


const port =  8081;
app.listen(port, console.log(`Listening on port ${port}...`));
