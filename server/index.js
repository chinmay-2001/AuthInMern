require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const getdata=require("./routes/getdata");
// const recRoutes =require("./routes/recruitar")

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
// app.use(app.router);
// routes.initialize(app);

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/getdata",getdata);
// app.use("/api/recruitar", recRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
