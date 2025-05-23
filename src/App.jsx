import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./components/Login.jsx";
import About from "./pages/About.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</Layout>
	);
}

export default App;
