const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose
	.connect(
		"mongodb+srv://guillot44100bertrand:967996GLTbg44@cluster0.bur6lfi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
	)
	.then(() => console.log("Connexion à MongoDB réussie !"))
	.catch((err) => console.error("Erreur de connexion MongoDB", err));

// Toutes les routes d'auth sont sous /auth
app.use("/auth", authRouter);

app.listen(PORT, () => {
	console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
