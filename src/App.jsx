import { Routes, Route } from "react-router-dom";
import {
	Assesment,
	Homepage,
	Login,
	Register,
	Faq,
	OurProduct,
	AboutMe,
	ArtikelPage,
	Profile,
	ProductDetail,
	ArtikelDetail,
} from "pages";
import Navbar from "./components/molecules/Navbar";
import Footer from "./components/molecules/Footer";
import "./App.css";
import { useLocation } from "react-router-dom";

function App() {
	const location = useLocation();
	const currentURL = location.pathname;

	return (
		<div className="App">
			<section
				className={
					currentURL === "/"
						? "bg-transparent relative z-[1]"
						: "fixed w-full mb-10 top-0 bg-[#A3B7B3] z-[1]"
				}
			>
				<div
					className={`container mx-auto ${
						location.pathname.includes("auth") && "hidden"
					}`}
				>
					<Navbar />
				</div>
			</section>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/assesment" element={<Assesment />} />
				<Route path="/auth/login" element={<Login />} />
				<Route path="/auth/register" element={<Register />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="/product" element={<OurProduct />} />
				<Route path="/tentang-kami" element={<AboutMe />} />
				<Route path="/artikel" element={<ArtikelPage />} />
				<Route path="/artikel/:id" element={<ArtikelDetail />} />
				<Route path="/user/profile" element={<Profile />} />
				<Route path="/product/:id" element={<ProductDetail />} />
			</Routes>
			<section
				className={`bg-[#A3B7B3] pt-10 md:pt-20 ${
					currentURL === "/assesment" ? "" : "mt-[168px]"
				} pb-10  ${location.pathname.includes("auth") && "hidden"}`}
			>
				<Footer />
			</section>
		</div>
	);
}

export default App;
