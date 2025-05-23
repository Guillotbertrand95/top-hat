const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

//Route test
app.get("/", (req, res) => {
	res.send("Le backend est en ligne");
});

//route Post /login
app.post("/login", (req, res) => {
	const { email, password } = req.body;

	//simple validation
	if (!email || !password) {
		return res
			.status(400)
			.json({ message: " Veuillez remplir tous les champs" });
	}
	// simulons un utilisateur dans une base de données
	const user = {
		email: "guillotbertrand95@gmail.com",
		password: "Banzaii@967996",
	};

	if (email === user.email && password === user.password) {
		return res.json({ message: "Connexion réussie ! Bienvenue Bertrand." });
	} else {
		return res
			.status(401)
			.json({ message: "Email ou mot de passe incorrect." });
	}
});
app.listen(PORT, () => {
	console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
