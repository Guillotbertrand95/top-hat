const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");

// Middleware pour parser JSON
app.use(express.json());

// Utiliser les routes auth sous le chemin /auth
app.use("/auth", authRoutes);

// Démarrer le serveur...
app.listen(5000, () => console.log("Serveur démarré sur le port 5000"));
