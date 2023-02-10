import "./TextAreaField.css";

export default function TextAreaField(props) {
	const { Name, PlaceHolder, Rows, Cols, ...Otherprops } = props;
	return (
		<div className="TextAreaField">
			<textarea
				name={Name}
				rows={Rows}
				cols={Cols}
				placeholder={PlaceHolder}
				{...Otherprops}
			></textarea>
			<label>{PlaceHolder}</label>
		</div>
	);
}
