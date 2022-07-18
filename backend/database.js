const mongoose = require("mongoose");
const mongoURI =
	"mongodb+srv://admin:u9U4HVpmHZSecKHt@cluster0.wkizw0g.mongodb.net/mynotes-app?retryWrites=true&w=majority";

const connectToMongo = () => {
	mongoose.connect(mongoURI);
};

module.exports = connectToMongo;
