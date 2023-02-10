import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
	return (
		<div className="navigation">
			<div className="navContainer">
				<div className="navBar">
					<div>
						<NavLink
							to="/"
							className="navLink"
						>
							<img
								src="./LogoNoBg.png"
								alt="Logo"
								className="logo"
								title="SDVVL Survey and Construction Pvt.Ltd"
							/>
						</NavLink>
					</div>
					<nav>
						<ul className="navLinks">
							<li>
								<NavLink
									to="/home"
									className="navLink"
								>
									Home
								</NavLink>
							</li>

							<li>
								<NavLink
									to="/about"
									className="navLink"
								>
									About
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/what_we_do"
									className="navLink"
								>
									What we do
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/careers"
									className="navLink"
								>
									Careers
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/projects"
									className="navLink"
								>
									Projects
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/contact_us"
									className="navLink"
								>
									Contact Us
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}
