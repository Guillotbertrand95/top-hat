import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.scss";

function Navbar({ isLoggedIn, onLogout }) {
	const navigate = useNavigate();

	const handleLogout = () => {
		onLogout(); // Mets à jour l’état dans Layout
		navigate("/login"); // Redirige vers la page login
	};

	return (
		<nav className="navbar">
			<h1 className="navbar-logo">MonProjet</h1>
			<ul className="navbar-links">
				<li>
					<Link to="/">Accueil</Link>
				</li>
				<li>
					<Link to="/about">À propos</Link>
				</li>
				{isLoggedIn ? (
					<>
						<li>
							<Link to="/dashboard">Espace perso</Link>
						</li>
						<li>
							<button onClick={handleLogout}>
								Se déconnecter
							</button>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to="/login">Se connecter</Link>
						</li>
						<li>
							<Link to="/register">S’inscrire</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}

export default Navbar;
