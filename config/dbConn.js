var mongoose = require("mongoose");
var dotenv = require("dotenv")
dotenv.config();
var url = process.env.MONGO_URI;

var conn = mongoose.connect(url, {
    useNewUrlParser: true, 
	useUnifiedTopology: true
})
.then(() => console.log("Database successfully connected"))
.catch((err) => console.log("DB unable to connect ", err))

module.exports = conn;