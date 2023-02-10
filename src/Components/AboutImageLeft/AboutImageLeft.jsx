import "./AboutImageLeft.css";

export default function AboutImageLeft(props) {
	const { Heading, Content, ImageUrl, ImageAlt } = props;
	return (
		<div className="AboutImageLeft">
			<div className="AboutImageLeftContainer">
				<div className="AboutImageLeftContent">
					<h1 className="AboutImageLeftHeading">{Heading}</h1>
					<p>{Content}</p>
				</div>
				<div>
					<img
						className="AboutImageLeftImage"
						src={ImageUrl}
						alt={ImageAlt}
					/>
				</div>
			</div>
		</div>
	);
}
