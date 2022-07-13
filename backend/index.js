const connectToMongo = require("./database");
const express = require("express");
var cors = require("cors");
connectToMongo();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

//Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
