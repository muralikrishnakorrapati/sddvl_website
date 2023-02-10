import "./FooterNavLinks.css";
import { Link } from "react-router-dom";

export default function FooterNavLinks() {
	return (
		<div className="FooterNavLinks">
			<h3>Our Links</h3>
			<div>
				<div>
					<Link to="/home">Home</Link>
				</div>
				<div>
					<Link to="/about">About</Link>
				</div>
				<div>
					<Link to="/what_we_do">What we do</Link>
				</div>
				<div>
					<Link to="/careers">Careers</Link>
				</div>
				<div>
					<Link to="/projects">Projects</Link>
				</div>
				<div>
					<Link to="/contact_us">Contact Us</Link>
				</div>
			</div>
		</div>
	);
}
