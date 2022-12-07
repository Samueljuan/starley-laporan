import React from "react";
import { Button } from "components/atoms";

const AssessmentStarted = ({ onChangeTImeline }) => {
	const handleStartAssestment = () => {
		onChangeTImeline(2);
	};

	return (
		<div className="pt-[9rem] px-[60px]">
			<p className="font-playfair text-textDefault">Starley Acne Skin Test!</p>
			<h1 className="font-inter mt-[39px] font-bold text-2xl text-textDefault">
				Kami ingin tau sedikit nih, tentang kamu!
			</h1>
			<p className="font-inter mt-[39px] max-w-[658px] text-textDefault">
				Skin Test ini bertujuan agar kamu bisa mendapatkan informasi kondisi
				wajah seputar jerawat! Di bagian akhir kami juga akan merokemendasikan
				produk terbaik yang cocok menangani masalah kamu!{" "}
			</p>
			<p className="font-inter mt-[39px] max-w-[658px] text-textDefault">
				Skin Test ini terdiri dari: 5 Bagian Pendek!
			</p>
			<ol className="list-decimal px-4 py-[39px] text-textDefault leading-[160%]">
				<li>Data Diri</li>
				<li>Kondisi kulit kamu</li>
				<li>Keparahan jerawat</li>
				<li>Pengalaman Kamu</li>
				<li>Cerita Lengkap Jerawat</li>
			</ol>
			<p className="font-inter font-bold italic text-textDefault">
				(Estimasi pengisian 6 menit)
			</p>
			<div className="flex justify-between mt-[100px]">
				<span></span>
				<Button label="Get Started" onClick={handleStartAssestment} />
			</div>
		</div>
	);
};

export default AssessmentStarted;
