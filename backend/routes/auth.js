const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const { response } = require("express");
const bycrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const jwtToken = "atharva";
const fetchuser = require("../middleware/fetchuser")

// 1st Endpoint: Creating a user
router.post(
	"/createUser",
	//  Array with validators
	[
		body("name", "Enter a name").isLength({ min: 1 }),
		body("email", "Enter a valid email").isEmail(),
		body("password", "The password should be at least 8 characters").isLength({
			min: 8,
		}),
	],
	async (req, res) => {
		// Checks for error and returns it.
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		try {
			// Checks if user with same email already exists.
			let user = await User.findOne({ email: req.body.email });
			if (user) {
				return res.status(400).json({ error: "This email is already in use" });
			}
			//hashing password with salt
			const salt = await bycrypt.genSalt(10);
			const finalPassword = await bycrypt.hash(req.body.password, salt);
			// Creates an user if same user doesn't exists
			user = await User.create({
				name: req.body.name,
				email: req.body.email,
				password: finalPassword,
			});
			const data = {
				user: {
					id: user.id,
				},
			};
			const autentication_token = jwt.sign(data, jwtToken);
			res.json({ autentication_token });
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Error");
		}
	}
);

// 2nd Endpoint: Verifying login of a user
router.post(
	"/login",
	//  Array with validators
	[
		body("email", "Enter a valid email").isEmail(),
		body("password", "Exter a valid password").exists(),
	],
	async (req, res) => {
		// Checks for error and returns it.
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		// Gets email, password from the req
		const { email, password } = req.body;
		try {
			// Check if entered email is correct
			let user = await User.findOne({ email });
			if (!user) {
				return res
					.status(400)
					.json({ error: "Enter a valid email or password" });
			}
			// Check if entered password is correct
			const passwordCheck = await bycrypt.compare(password, user.password);
			if (!passwordCheck) {
				return res
					.status(400)
					.json({ error: "Enter a valid email or password" });
			}
			const data = {
				user: {
					id: user.id,
				},
			};
			const autentication_token = jwt.sign(data, jwtToken);
			res.json({ autentication_token });
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Error");
		}
	}
);

// 3rd Endpoint: Geeting logged in user's detail
router.post("/getuser", fetchuser, async (req, res) => {
	try {
		userId = req.user.id;
		const user = await User.findById(userId).select("-password");
		res.send(user);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Error");
	}
});

module.exports = router;
