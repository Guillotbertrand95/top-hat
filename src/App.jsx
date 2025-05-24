import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./components/Login.jsx";
import About from "./pages/About.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const logged = localStorage.getItem("isLoggedIn") === "true";
		setIsLoggedIn(logged);
	}, []);

	const handleLogin = () => setIsLoggedIn(true);

	const handleLogout = () => {
		localStorage.removeItem("isLoggedIn");
		setIsLoggedIn(false);
	};

	return (
		<Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route
					path="/login"
					element={<Login onLogin={handleLogin} />}
				/>
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</Layout>
	);
}

export default App;
