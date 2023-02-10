import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navigation from "./Components/Navigation/Navigation";

import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import WhatWeDo from "./Views/WhatWeDo/WhatWeDo";
import ContactUs from "./Views/ContactUs/ContactUs";
import Projects from "./Views/Projects/Projects";
import Careers from "./Views/Careers/Careers";
import PageNotFound from "./Views/PageNotFound/PageNotFound";

import Footer from "./Components/Footer/Footer";
import CopyrightFooter from "./Components/CopyrightFooter/CopyrightFooter";

function App() {
	return (
		<>
			<div className="App">
				<Navigation />

				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/home"
						element={<Home />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="what_we_do"
						element={<WhatWeDo />}
					/>
					<Route
						path="/projects"
						element={<Projects />}
					/>
					<Route
						path="/contact_us"
						element={<ContactUs />}
					/>
					<Route
						path="/careers"
						element={<Careers />}
					/>
					<Route
						path="*"
						element={<PageNotFound />}
					/>
				</Routes>

				<Footer />
				<CopyrightFooter />
			</div>
		</>
	);
}

export default App;
