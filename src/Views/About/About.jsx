import AboutImageRight from "../../Components/AboutImageRight/AboutImageRight";
import AboutImageLeft from "../../Components/AboutImageLeft/AboutImageLeft";
import "./About.css";

export default function About() {
	return (
		<div
			className="About"
			id="about"
		>
			<AboutImageRight
				Heading="About Us :"
				Content="At SDVVL Survey and Construction Pvt.Ltd, we believe
						that every construction project should be built with
						care and attention to detail. Our team of experts has 8 years
						of experience in Construction, and we're dedicated to
						delivering top-quality workmanship and excellent
						customer service."
				ImageUrl="./about.png"
				ImageAlt="About Us"
			/>
			<AboutImageLeft
				Heading="Our Vision"
				Content="Our vision is to be the leading construction company in Survey and Construction,
                known for our expertise, quality workmanship, and exceptional customer service.
                We strive to constantly improve our processes, technology, and skills to stay ahead of
                the competition and provide our clients with the best possible experience.
                 We envision a future where we are recognized as the go-to company for all construction needs."
				ImageUrl="./vision.png"
				ImageAlt="Vision"
			/>

			<AboutImageRight
				Heading="Our Story :"
				Content="SDVVL was started in 2017 with the goal of becoming a
						leader in the Construction industry. SDVVL was started
						with the name of SDVVL Survey Solutions , later in 2021
						transformed into SDVVL Survey and Construction Pvt.Ltd
						Over the years, we've grown and expanded our services,
						but our commitment to delivering exceptional work
						remains the same."
				ImageUrl="./story.png"
				ImageAlt="Story"
			/>
			<AboutImageLeft
				Heading="Our Mission :"
				Content="Our mission is to provide our clients with the highest 
                quality construction services, delivered on time and within budget.
                 We believe in creating long-lasting relationships with our clients,
                  based on trust and satisfaction."
				ImageUrl="./mission.png"
				ImageAlt="Mission"
			/>
			<AboutImageRight
				Heading="Our Team :"
				Content="Our team is made up of experienced professionals who are passionate about what they do.
                From project managers to site supervisors, every member of our team is 
                committed to delivering top-quality workmanship and excellent customer service."
				ImageUrl="./team.png"
				ImageAlt="Mission"
			/>
		</div>
	);
}
