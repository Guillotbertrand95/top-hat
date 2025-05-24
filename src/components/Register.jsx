import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.scss";

function Register({ onLogin }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		//Validation basique
		if (!email || !password || !confirmPassword) {
			setMessage("veuillez rempluir tous les champs");
			return;
		}
		try {
			const response = await fetch("http://localhost:5000/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});
			const data = await response.json();

			if (response.ok) {
				setMessage("inscription réusssie!");
				setMessage("Inscription réussie ! Veuillez vous connecter.");
				setTimeout(() => {
					navigate("/login");
				}, 1500);
			} else {
				setMessage(data.message || "Erreur lors de l'inscription.");
			}
		} catch (error) {
			setMessage("Erreur réseau, veuillez réessayer");
		}
	};
	return (
		<div className="register-container">
			<h2>Créer un compte</h2>
			<form onSubmit={handleSubmit}>
				<label>Email :</label>

				<br />
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="ton.email@example.com"
				/>
				<div>
					<label>Mot de passe :</label>
					<br />
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="*********"
					/>
				</div>
				<div>
					<label>Confirmer le mot de passe :</label>
					<br />
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						placeholder="*********"
					/>
				</div>
				<button type="submit">S’inscrire</button>
			</form>
			{message && <p>{message}</p>}
		</div>
	);
}

export default Register;
