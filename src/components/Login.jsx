import "../styles/login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!email || !password) {
			setMessage("Veuillez remplir tous les champs");
			return;
		}

		try {
			const response = await fetch("http://localhost:5000/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();
			if (response.ok) {
				setMessage(data.message);
				localStorage.setItem("isLoggedIn", "true"); // On garde le login dans le navigateur
				setTimeout(() => {
					navigate("/dashboard");
				}, 1000); // petit délai pour que l’utilisateur voit le message
			} else {
				setMessage(data.message || "Email ou mot de passe incorrect.");
			}
		} catch (error) {
			setMessage("Erreur réseau, impossible de se connecter.");
		}
	};
	return (
		<div className="login-container">
			<h2>Connexion</h2>
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
					<label>Mot de passe:</label>
					<br />
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="*********"
					/>
				</div>
				<button type="submit">Se connecter</button>
			</form>
			{message && <p>{message}</p>}
		</div>
	);
}
export default Login;
