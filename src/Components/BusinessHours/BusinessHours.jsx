import "./BusinessHours.css";

export default function BusinessHours() {
	return (
		<div className="BusinessHours">
			<h2>Business Hours</h2>

			<div className="BusinessHoursTimings">
				<div className="BusinessHoursTimingsInfo">
					<p>We provide 24/7/365 support to our clients.</p>
				</div>
				<div className="BusinessHoursTimingsInfo">
					<p>Mon-Sat :</p>
					<p>9:30 A.M - 6:30 P.M</p>
				</div>
				<div className="BusinessHoursTimingsInfo">
					<p>Sundays :</p>
					<p>9:30 A.M - 01:00 P.M</p>
				</div>
				<div className="BusinessHoursTimingsInfo">
					<p>National Holidays:</p>
					<p>Closed</p>
				</div>
			</div>
		</div>
	);
}
