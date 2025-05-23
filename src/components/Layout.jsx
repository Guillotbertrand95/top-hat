// Layout.jsx
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
	// State local pour suivre la connexion
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const logged = localStorage.getItem("isLoggedIn") === "true";
		setIsLoggedIn(logged);
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("isLoggedIn");
		setIsLoggedIn(false);
	};

	const handleLogin = () => {
		setIsLoggedIn(true);
	};

	return (
		<>
			<Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
			{/* Si tu veux, tu peux passer handleLogin à Login pour mettre à jour l’état */}
			<main>{children}</main>
			<Footer />
		</>
	);
}

export default Layout;
