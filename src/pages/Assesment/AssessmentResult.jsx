import React from "react";
import { ArticleImage } from "assets/images";

const AssessmentResult = () => {
	return (
		<div className="pt-[9rem] px-[60px] bg-[#F8F8F8] text-textDefault">
			<div className="grid grid-cols-[4fr,1fr] items-center gap-5">
				<div className="mt-[39px]">
					<h1 className="font-inter font-bold text-2xl">
						Hai, Minley! Perjuanganmu melawan jerawat telah dimulai bersama
						Starley!
					</h1>
					<p className="font-inter mt-[20px]">
						Dari data yang kami dapatkan, dapat disimpulkan kamu memiliki
						jerawat dengan <span className="font-semibold">skala Mild</span>{" "}
						Perlu diketahui bahwa, skala Mild! memerlukan treatment khusus
						dengan lifestyle modification nih!
					</p>
				</div>
				<div className="w-[132px] h-[132px] rounded-full text-white bg-[#FB8C7C] flex justify-center items-center flex-col">
					<p>Skala</p>
					<p className="text-[32px] font-bold leading-[25px]">MILD</p>
				</div>
			</div>
			<div>
				<p className="font-inter mt-[64px] max-w-[348px] font-bold text-2xl">
					Hasil Assesment
				</p>
				<div>
					<div className="mt-5 flex space-x-[16px]">
						<div className="w-6 h-6 rounded bg-[#FFCEAD] text-center">a</div>
						<p className="max-w-[887px]">
							Akhir-akhir ini kamu cukup banyak tekanan yah :(, skala setres
							kamu menunjukkan skala 5. Yuk baca artikel tentang setres dan
							jerawat
						</p>
					</div>
					<div className="mt-5 flex space-x-[16px]">
						<div className="w-6 h-6 rounded bg-[#FFCEAD] text-center">b</div>
						<p className="max-w-[887px]">
							Wah, ternyata istirahat kamu belum cukup :(, kamu hanya istirahat
							kurang dari 6 jam akhir-akhir ini. kualitas tidur yang kurang baik
							bisa menjadi alasan utama munculnya jerawat terutama pada skala
							mild. Yuk ubah kualitas tidur kamu dengan artikel berikut ini
						</p>
					</div>
				</div>
			</div>
			<div className="grid mt-[64px] grid-cols-[4fr,1.5fr] gap-[55px] items-center">
				<div>
					<p className="font-inter max-w-[348px] font-bold text-2xl">
						6 Hal yang bikin jerawatan!
					</p>
					<p className="font-inter mt-[30px] elipsis-3-lines opacity-70">
						Jerawat kita bisa definisikan sebagai inflamasi kronis di kulit yang
						menyerang kelenjar minyak kita. Pada dasarnya, terdapat 4 penyebab
						jerawat: 1. Produksi kelenjar keringat yang berlebiha 2.
						Keratinisasi kulit (regenerasi kulit) yang...
					</p>
					<div className="flex items-center space-x-4 mt-8">
						<p className="text-[#1B3E66] opacity-70 font-semibold">Info</p>
						<p className="opacity-70">5 mins read</p>
						<p className="opacity-70">7 Juli 2022</p>
					</div>
				</div>
				<img src={ArticleImage} className="w-[280px]" alt="image-article" />
			</div>
			<button className="w-full py-[12px] font-semibold bg-[#24324F] rounded-full text-white mt-8">
				Baca Artikel
			</button>
		</div>
	);
};

export default AssessmentResult;
