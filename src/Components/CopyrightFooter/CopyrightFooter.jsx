import "./CopyrightFooter.css";

export default function CopyrightFooter() {
	const date = new Date();

	return (
		<div className="CopyrightFooter">
			<p>
				© 2018 - {date.getFullYear()}, SDVVL Survey and Construction Pvt.Ltd ,
				All Rights Reserved.
			</p>
		</div>
	);
}
