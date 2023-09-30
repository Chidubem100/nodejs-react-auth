require("dotenv").config();


const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbConnection = require("./utils/db.config");
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/ErrorHandler');
const authRoute = require('./Routes/auth.route');
const app = express();
const port = 2020;

// APP CONFIG
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use('/api/v1/auth',authRoute);

// test
app.get("/health-choke", (req,res) =>{
	res.send("<h3>E no choke at all<h3/>")
});

app.use(notFound)
app.use(errorHandler);
// app.use(notFound);

const initServer = async() =>{
	try{
		dbConnection(process.env.MONGODBURI)
		app.listen(port, () =>{
			console.log("Server is running on " + port)
		});
	}catch(error){
		console.log(error);
		console.log("error occurred");
	}
};

initServer();
