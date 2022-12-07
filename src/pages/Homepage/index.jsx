import React from "react";
import Banner from "../../components/molecules/Banner";
import AboutMe from "../../components/molecules/AboutMe";
import Road from "../../components/molecules/Road";
import ProductHome from "components/molecules/ProductHome";
import ArtikelHome from "components/molecules/ArtikelHome";
import FaqHome from "components/molecules/FaqHome";

const Homepage = () => {
	return (
		<div>
			<Banner />
			<div className="container mx-auto">
				<AboutMe />
			</div>

			<Road />

			<div className="container mx-auto">
				<ProductHome />
			</div>

			<div className="container mx-auto">
				<ArtikelHome />
			</div>

			<div className="container mx-auto">
				<FaqHome />
			</div>
		</div>
	);
};

export default Homepage;
