import React from "react";
import { Preview1, Preview2 } from "assets/images";
import { useState } from "react";

const ProductDetail = () => {
	const [imgActive, setImgActive] = useState(Preview1);
	const [productCount, setProductCount] = useState(1);
	const imageData = [Preview1, Preview2];

	const addProduct = (type) => {
		if (type === "add") {
			setProductCount(productCount + 1);
		} else {
			setProductCount(productCount > 1 ? productCount - 1 : 1);
		}
	};

	return (
		<div>
			<div className="max-w-[1102px] mx-auto mt-[100px] md:mt-[191px] mobile:px-4">
				<div className="grid grid-cols-[1fr,2fr] gap-[37px] mobile:grid-cols-1">
					<div>
						<img
							src={imgActive}
							alt="img-preview-pdp"
							className="w-full rounded-lg"
						/>
						<div className="flex items-center space-x-3 mt-3">
							{imageData.map((el, ind) => (
								<img
									onClick={() => setImgActive(el)}
									className="w-[70px] h-[70px] border-2 cursor-pointer border-transparent hover:border-gray-500 rounded-md"
									src={el}
									key={ind}
									alt="img-preview"
								/>
							))}
						</div>
					</div>
					<div className="font-inter">
						<h1 className="font-playfair text-[25px] pt-9 text-[#1B3E66] font-bold">
							Azarine Acne Spot Serum 20ml
						</h1>
						<p className="text-sm">
							<span className="font-semibold">Terjual</span> 6
						</p>
						<p className="text-[#1B3E66] font-bold text-[48px]">Rp.48.000</p>
						<div className="grid grid-cols-[1fr,3fr] mt-[33px]">
							<div className="space-y-2 text-sm font-semibold">
								<p>Berat Produk</p>
								<p>Komposisi</p>
								<p>Tipe Kulit</p>
								<p>Manfaat</p>
							</div>
							<div className="space-y-2 text-sm">
								<p>200 gram</p>
								<p>Hyaluronic Acid, Vitamin C, Vitamin E</p>
								<p>Semua Tipe Kulit</p>
								<p>
									Jerawat/Noda, Anti-Penuaan Dini, Komedo, Pori-pori Tersumbat,
									Noda Hitam/Hiperpegmentasi
								</p>
							</div>
						</div>
						<div className="flex mt-[63px]">
							<div className="flex items-center space-x-[16px]">
								<button
									className="text-[40px] w-[46px] h-[46px] border-2 border-[#1B3E66] text-[#1B3E66]  flex items-center cursor-pointer justify-center rounded-lg"
									onClick={() => addProduct()}
								>
									-
								</button>
								<span className="text-[25px]">{productCount}</span>
								<button
									className="text-[40px] w-[46px] h-[46px] bg-[#1B3E66] text-white flex items-center cursor-pointer justify-center rounded-lg"
									onClick={() => addProduct("add")}
								>
									+
								</button>
							</div>
							<button className="border-2 border-[#1B3E66] text-[#1B3E66] rounded-full px-3 ml-[49px]">
								Beli Sekarang
							</button>
						</div>
					</div>
				</div>
				<div className="mt-[70px]">
					<h1 className="font-playfair text-[25px] pt-9 text-[#1B3E66] font-bold">
						Detail Produk
					</h1>
					<div className="space-y-6 mt-[29px]">
						<p>
							Serum yang diformulasikan untuk mengoptimalkan perbaikan skin
							barrier yang rusak.
						</p>
						<p>
							Mengkombinasikan 5 Jenis Ceramide yang berbeda untuk menjaga dan
							mengembalikan kondisi skin barrier agar kembali sehat. Ditambah
							kandungan BFL probiotik yang dapat mencegah dan merawat inflamasi
							ataupun permasalahan kulit seperti kemerahan dan jerawat. Untuk
							kondisi skin barrier yang terganggu, kandungan Centella Asiatica
							pada serum ini juga dapat menenangkan dan mempercepat penyembuhan
							kulit
						</p>
						<p>Size: 20ml</p>
						<p>Memperbaiki dan menjaga skin barrier yang rusak</p>
						<p>
							Meredakan dan menenangkan permasalahan kulit (kemerahan, sensitif,
							jerawat)
						</p>
						<p>Meratakan kulit bertekstur menjadi lebih halus</p>
						<p>
							Mengurangi permasalahan kulit yang disebabkan oleh kerusakan skin
							barrier
						</p>
						<p>Mencegah kulit sensitif, peradangan kulit, dan jerawat</p>
						<p>Hero Ingredients:</p>
						<p>
							5x Ceramide: Menggunakan 5 tipe ceramide untuk memperbaiki dan
							menenangkan barrier kulit{" "}
						</p>
						<p>
							BFL Probiotik: Mengatur mikrobioma dan barrier pada kulit untuk
							mencegah sensitivitas dan peradangan kulit
						</p>
						<p>Centella Asiatica: Meredakan dan merawat inflamasi pada kulit</p>
						<p>Cara Penggunaan:</p>
						<p>1.Gunakan pada kondisi wajah yang bersih</p>
						<p>2. Teteskan beberapa tetes ke tangan</p>
						<p>
							3. Usapkan pada wajah secara merata, bisa diusap ke bagian leher
						</p>
						<p>4. Biarkan serum meresap pada kulit secara optimal</p>
						<p>
							5. Untuk hasil yang lebih baik, serum dapat digunakan siang dan
							malam hari
						</p>
						<p>
							6. Pengunaan di pagi hari sebaiknya diakhiri dengan penggunaan
							sunscreen
						</p>
						<p>
							SAFE FOR ALL SKIN TYPES: No Alcohol No Paraben No Mineral Oil No
							Colorant Vegan Friendly Cruelty Free Ingredients AQUA,
							METHYLPROPANEDIOL, BIFIDA FERMENT LYSATE, GLYCERIN, NIACINAMIDE,
							DIMETHICONE, PENTYLENE GLYCOL, DIPROPYLENE GLYCOL, GLYCERETH-26,
							Centella Asiatica Extract, PROPYLENE GLYCOL, MARIS AQUA, Ceramide
							NP, PANTHENOL, CERAMIDE NS/CERAMIDE NG, CERAMIDE AS, CERAMIDE EOP,
							CERAMIDE AP, SODIUM HYALURONATE, PEG-60 HYDROGENATED CASTOR OIL,
							HYDROXYETHYL UREA, BIS-PEG-18 METHYL ETHER DIMETHYL SILANE,
							4-t-BUTYLCYCLOHEXANOL, Coenzyme Q10, PEG-10 DIMETHICONE, ISONONYL
							ISONONANOATE, AMMONIUM ACRYLOYLDIMETHYLTAURATE/BEHENETH-25
							METHACRYLATE CROSSPOLYMER, BISABOLOL, ECTOIN, AMMONIUM
							POLYACRYLOYLDIMETHYL TAURATE, TOCOPHEROL, LACTOBACILLUS/SOYMILK
							FERMENT FILTRATE, HYDROGENATED LECITHIN, HAMAMELIS VIRGINIANA
							(WITCH HAZEL) EXTRACT, ZINGIBER OFFICINALE (GINGER) ROOT EXTRACT,
							1, 2-HEXANEDIOL, POLYACRYLATE CROSSPOLYMER-6, C12-20 ALKYL
							GLUCOSIDE, o-CYMEN-5-OL, HYDROXYACETOPHENONE, DIMETHICONOL, SODIUM
							POLYACRYLATE, GLUCOSE
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
