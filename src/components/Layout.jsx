// Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children, isLoggedIn, onLogout }) {
	return (
		<>
			<Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />
			<main>{children}</main>
			<Footer />
		</>
	);
}

export default Layout;
