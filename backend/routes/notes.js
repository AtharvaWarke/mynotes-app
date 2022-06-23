const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

// 1st Endpoint: Get user's notes - GET "/api/notes/fetchnotes"
router.get("/fetchnotes", fetchuser, async (req, res) => {
	try {
		const notes = await Notes.find({ user: req.user.id });
		res.json(notes);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Error");
	}
});

// 2nd Endpoint: Add user's new notes - GET "/api/notes/addnote"
router.post(
	"/addnote",
	fetchuser,
	[
		body("title", "Enter a title").isLength({ min: 1 }),
		body("description", "Enter a descriptioin").isLength({ min: 0 }),
	],
	async (req, res) => {
		try {
			const { title, description, tag } = req.body;
			// Checks for error and returns it.
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}

			const note = new Notes({
				title,
				description,
				tag,
				user: req.user.id,
			});
			const noteSave = await note.save();
			res.json(noteSave);
		} catch (error) {
			console.error(error.message);
			res.status(500).send("Error");
		}
	}
);


module.exports = router;
