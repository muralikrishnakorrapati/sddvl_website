import "./FormButton.css";

export default function FormButton(props) {
	const { ButtonText, Type, Name, ...OtherProps } = props;
	return (
		<div className="FormButton">
			<button
				type={Type}
				name={Name}
				{...OtherProps}
			>
				{ButtonText}
			</button>
		</div>
	);
}
