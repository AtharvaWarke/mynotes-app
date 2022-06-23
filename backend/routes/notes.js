const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
const { json } = require("express");

// 1st Endpoint: Geting user's notes - GET "/api/notes/fetchnotes"
router.get("/fetchnotes", fetchuser, async (req, res) => {
	try {
		const notes = await Notes.find({ user: req.user.id });
		res.json(notes);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Error");
	}
});

// 2nd Endpoint: Adding user's notes - POST "/api/notes/addnote"
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

// 3rd Endpoint: Updating user's notes - PUT "/api/notes/updatenote/:id"
router.put("/updatenote/:id", fetchuser, async (req, res) => {
	const { title, description, tag } = req.body;
	try {
		// Creating a new note
		const updateNote = {};
		if (title) {
			updateNote.title = title;
		}
		if (description) {
			updateNote.description = description;
		}
		if (tag) {
			updateNote.tag = tag;
		}
		// Finding the note that needs to be updated
		let note = await Notes.findById(req.params.id);
		if (!note) {
			return res.status(404).send("Not found");
		}
		if (note.user.toString() !== req.user.id) {
			return res.status(401).send("Not authenticated");
		}
		note = await Notes.findByIdAndUpdate(
			req.params.id,
			{ $set: updateNote },
			{ new: true }
		);
		res.json({ note });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Error");
	}
});

// 4th Endpoint: Deleting user's notes - DELETE "/api/notes/delete/:id"
router.delete("/delete/:id", fetchuser, async (req, res) => {
	const { title, description, tag } = req.body;
	try {
		// Finding the note that needs to be deleted
		let note = await Notes.findById(req.params.id);
		if (!note) {
			return res.status(404).send("Not Found");
		}
		// Checking if the note is of the correct user
		if (note.user.toString() !== req.user.id) {
			return res.status(401).send("Not Allowed");
		}
		// Deleteing the note
		note = await Notes.findByIdAndDelete(req.params.id);
		res.json({ Success: "Note has been deleted", note: note });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Error");
	}
});

module.exports = router;
