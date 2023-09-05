require("dotenv").config();


const express = require("express");
const cors = require("cors");
const dbConnection = require("./utils/db.config");
const app = express();
const port = 2020;

// APP CONFIG
app.use(express.json());
app.use()
app.use(cors());


// test
app.get("/", (req,res) =>{
	res.send("<h3>Api<h3/>")
});

const initServer = async() =>{
	try{
		dbConnection(process.env.MONGODBURI)
		app.listen(port, () =>{
			console.log("Server is running")
		})
	}catch(error){
		console.log(error);
		console.log("error occurred");
	}
};

initServer();
