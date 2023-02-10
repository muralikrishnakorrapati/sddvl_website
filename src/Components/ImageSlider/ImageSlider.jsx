import { useState } from "react";
import "./ImageSlider.css";

export default function ImageSlider({ Images }) {
	const backgroundImages = [
		{ url: "./construction.png", alt: "Construction" },
		{ url: "./surveying.png", alt: "Construction" },
	];
	const [backgroundImageNumber, setBackgroundImage] = useState(0);
	const sliderStyle = {
		backgroundImage: `url(${backgroundImages[backgroundImageNumber].url})`,
		backgroundSize: "cover",
	};

	return (
		<div className="ImageSlider">
			<div
				className="SliderImageContainer"
				style={sliderStyle}
			></div>
		</div>
	);
}
