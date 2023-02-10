import "./Footer.css";

import FooterCompanyInfo from "./../FooterCompanyInfo/FooterCompanyInfo";
import FooterNavLinks from "../FooterNavLinks/FooterNavLinks";
import FooterContactUsInfo from "./../FooterContactUsInfo/FooterContactUsInfo";
import FooterServices from "./../FooterServices/FooterServices";

export default function Footer() {
	return (
		<div className="Footer">
			<FooterCompanyInfo />
			<div className="OurLinksAndServices">
				<FooterNavLinks />
				<FooterServices />
			</div>
			<FooterContactUsInfo />
		</div>
	);
}
