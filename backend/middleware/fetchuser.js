var jwt = require("jsonwebtoken");
const jwtToken = "atharva";

const fetchuser = (req, res, next) => {
	const token = req.header("auth-token");
	if (!token) {
		res.status(401).send({ error: "Invalid token" });
	}
	try {
		const data = jwt.verify(token, jwtToken);
		req.user = data.user;
		next();
	} catch (error) {
		res.status(401).send({ error: "Invalid token" });
	}
};

module.exports = fetchuser;
