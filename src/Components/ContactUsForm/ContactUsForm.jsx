import TextAreaField from "../TextAreaField/TextAreaField";
import InputField from "../InputField/InputField";
import "./ContactUsForm.css";
import FormButton from "../FormButton/FormButton";

export default function ContactUsForm() {
	return (
		<div className="ContactUsForm">
			<form>
				<InputField
					Name="FullName"
					PlaceHolder="Full Name"
					type="text"
					required
				/>
				<InputField
					Name="EMail"
					PlaceHolder="Email Address"
					type="email"
					required
				/>
				<InputField
					Name="Mobile Number"
					PlaceHolder="Mobile Number"
					type="tel"
					required
				/>

				<TextAreaField
					Name="Message"
					PlaceHolder="Message"
					Rows="10"
					Cols="50"
				/>

                <FormButton Type="submit" Name="Submit" ButtonText="Submit"/>
			</form>
		</div>
	);
}
