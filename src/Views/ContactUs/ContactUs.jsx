import ContactUsForm from "../../Components/ContactUsForm/ContactUsForm";
import "./ContactUs.css";

export default function ContactUs() {
	return (
		<div className="ContactUs">
			<div className="ContactUsContainer">
				<ContactUsForm />
				<div>
					<img
						src="./contact.png"
						alt="Contact"
						className="ContactUsImg"
					/>
				</div>
			</div>
		</div>
	);
}
