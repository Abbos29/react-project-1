import { useEffect, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		if (isMenuOpen) {
			document.body.className = "locked";
		} else {
			document.body.removeAttribute("class");
		}
	}, [isMenuOpen]);

	return (
		<header>
			<div className="container">
				<nav>
					<Link className="logo" to="/">
						Rolling
					</Link>
					<input className="search-input" type="text" />

					<div className={`menu ${isMenuOpen ? "open" : ""}`}>
						<Link className="link" to="/about">
							About
						</Link>
						<Link className="link" to="/catalog">
							Catalog
						</Link>
						<Link className="link" to="/news">
							News
						</Link>
					</div>

					<button className="btn-sec modal-btn">Modal</button>

					<div
						className={`burger ${isMenuOpen ? "open" : ""}`}
						onClick={toggleMenu}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
