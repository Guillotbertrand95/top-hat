const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User"); // à adapter selon ta structure

const router = express.Router();

router.post("/register", async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res
			.status(400)
			.json({ message: "Veuillez remplir tous les champs" });
	}

	try {
		// Vérifier si l'utilisateur existe déjà
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "Email déjà utilisé." });
		}

		// Hasher le mot de passe
		const hashedPassword = await bcrypt.hash(password, 10);

		// Créer et sauvegarder l'utilisateur
		const newUser = new User({ email, password: hashedPassword });
		await newUser.save();

		res.status(201).json({
			message:
				"Inscription réussie ! Vous pouvez maintenant vous connecter.",
		});
	} catch (error) {
		res.status(500).json({
			message: "Erreur serveur, réessayez plus tard.",
		});
	}
});

router.post("/login", async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res
			.status(400)
			.json({ message: "Veuillez remplir tous les champs" });
	}

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res
				.status(401)
				.json({ message: "Email ou mot de passe incorrect." });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res
				.status(401)
				.json({ message: "Email ou mot de passe incorrect." });
		}

		res.json({ message: `Connexion réussie ! Bienvenue ${email}.` });
	} catch (error) {
		res.status(500).json({
			message: "Erreur serveur, réessayez plus tard.",
		});
	}
});

module.exports = router;
