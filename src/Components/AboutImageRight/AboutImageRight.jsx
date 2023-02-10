import "./AboutImageRight.css";

export default function AboutImageRight(props) {
    const {Heading , Content , ImageUrl , ImageAlt } = props ;
	return (
		<div className="AboutImageRight">
			<div className="AboutImageRightContainer">
				<div className="AboutImageRightContent">
					<h1 className="AboutImageRightHeading">{Heading}</h1>
					<p>
						{Content}
					</p>
				</div>
				<div>
					<img
						className="AboutImageRightImage"
						src={ImageUrl}
						alt={ImageAlt}
					/>
				</div>
			</div>
		</div>
	);
}
