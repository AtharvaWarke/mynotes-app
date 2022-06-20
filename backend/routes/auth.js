const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const { response } = require("express");

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
			// Creates an user if same user doesn't exists
			user = await User.create({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
			});
			res.json(user);
		} catch (error) {
			console.error(error.message);
			req.status(500).send("Error");
		}
	}
);

module.exports = router;
