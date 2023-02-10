import "./InputField.css";
export default function InputField(props) {
	const { Name, PlaceHolder, Type, ...OtherProps } = props;
	return (
		<div className="InputField">
			<input
				name={Name}
				placeholder={PlaceHolder}
				type={Type}
				{...OtherProps}
			></input>
			<label>{PlaceHolder}</label>
		</div>
	);
}
