import "./Map.css";

export default function Map() {
	return (
		<div className="Map">
			<iframe
				title="CompanyLocation"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.6110955207328!2d82.24024881466475!3d16.993669588315676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3829e58b0ecd67%3A0xcfd5b94f9a94ec07!2sSDVVL%20COMPANY!5e0!3m2!1sen!2sin!4v1675239374312!5m2!1sen!2sin"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
}
