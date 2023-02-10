import "./PageNotFound.css";

export default function PageNotFound() {
	const page404ErrorStyle = {
		backgroundImage: `url(./404Error.gif)`,
		backgroundSize: "auto",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center center",
	};
	return (
		<div className="PageNotFound">
			<div
				style={page404ErrorStyle}
				className="pageNotFoundImageContainer"
			>
				<h1>404 Error</h1>
				<h1>Page Not Found</h1>
			</div>
		</div>
	);
}
