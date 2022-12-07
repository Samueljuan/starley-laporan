import React from "react";
import Profile from "../../assets/images/profile-artikel-detail.svg";
import ImageArtikel from "../../assets/images/image-artikel-page.svg";

const ArtikelPage = () => {
	const highlight = [
		{
			id: 1,
			title: "Tips",
		},
		{
			id: 2,
			title: "Jerawat",
		},
		{
			id: 3,
			title: "Info",
		},
	];

	return (
		<div className="container mx-auto font-inter">
			<div className="flex mt-[100px] md:mt-[181px]">
				{highlight.map((x) => {
					return (
						<div className="mr-[14px]" key={x.id}>
							<p className="border border-[#24324F] rounded-[50px] px-[24px] py-[8px]">
								{x.title}
							</p>
						</div>
					);
				})}
			</div>
			<div className="mt-[32px]">
				<p className="font-playfair text-default text-[54px] font-bold">
					6 Hal yang bikin jerawatan!
				</p>

				<div className="flex mt-[66px]">
					<div className="flex items-center">
						<img src={Profile} alt="Image profile artikel" />
						<div className="ml-[18px] ">
							<p className="font-bold text-base">Admin Starley</p>
							<p className="font-normal text-base">Rabu, 7 Juli 2022</p>
						</div>
					</div>
				</div>

				<div className="mt-[78px]">
					<img src={ImageArtikel} alt="Image Artikel" className="mx-auto" />
					<p className="mt-[32px] text-center text-[20px]">
						Source Image: <span className="italic">Unsplash</span>
					</p>
					<p className="text-[20px] font-inter mt-[32px]">
						Jerawat kita bisa definisikan sebagai inflamasi kronis di kulit yang
						menyerang kelenjar minyak kita. Pada dasarnya, terdapat 4 penyebab
						jerawat:
						<br />
						<br />
						1. Produksi kelenjar keringat yang berlebihan
						<br />
						2. Keratinisasi kulit (regenerasi kulit) yang berlebihan
						<br />
						3. Peradangan
						<br />
						4. Bakteri jerawat (Propionibacterium acnes)
						<br />
						<br />
						Selain 4 penyebab itu, banyak sekali faktor yang bisa bikin jerawat
						kita lebih parah! Seperti, polusi, social environment, makanan yang
						kita makan, hingga sosial media!
						<br />
						<br />
						Tidak hanya punya faktor penyebab yang banyak, tapi ternyata jerawat
						diderita 1/10 orang di dunia. Banyaknya angka ini membuat jerawat
						jadi penyakit terbanyak di dunia yang ke 8. Terdapat beberapa fakta
						dan riset yang menyebuktan bahwa lingkungan dapat memengaruhi begitu
						banyak penyakit kronis, seperti, obesitas, mental health, penyakit
						jantung dan pernafasan. Jerawat juga dikonsiderasikan sebagai
						penyakit kronis loh! Berarti jerawat juga dapat dipengaruhi oleh
						lingkungan.
						<br />
						<br />
						Faktanya, tidak terlalu banyak riset yang menjelaskan mengenai
						pengaruh lingkungan terhadap jerawat. Namun, minley akan tetap
						mencoba membahasnya dengan riset yang tersedia saat ini.
					</p>
					<div className="text-center mt-[59px]">
						<span className="h-[7px] w-[7px] bg-[#24324F] rounded-[50%] inline-block"></span>
						<span className="h-[7px] w-[7px] bg-[#24324F] rounded-[50%] inline-block mx-[12px]"></span>
						<span className="h-[7px] w-[7px] bg-[#24324F] rounded-[50%] inline-block"></span>
					</div>
					<div className="mt-[59px]">
						<p className="text-[20px]">
							<span className="font-bold">Obesitas</span>
							<br />
							Obesitas telah menjadi masalah umum di hampir seluruh dunia. Riset
							di China menyatakan obesitas hampir selalu berkaitan dengan semua
							penyakit kronis yang ada di Dunia. Hal ini juga ditambahkan riset
							dari Taiwan yang melibatkan 600.000 remaja yang menyatakan, remaja
							obesitas lebih rentan ketergantungan obat jerawat.
							<br />
							<br />
							<span className="font-bold"> Skin Type</span>
							<br />
							Peningkatan produksi kelenjar minyak merupakan memkanisme utama
							jerawat muncul di wajah kita. Produksi kelenjar minyak yang tinggi
							akan muncul di orang dengan karakteristik kulit berminyak dan
							kulit bervariasi/kulit mix (oily dan dry). Studi oleh Choi di
							tahun 2013 juga menyatakan, tingkat kadar minyak di wajah
							berkorelasi dengan banyaknya lesi jerawat.
							<br />
							<br />
							<span className="font-bold">Menstruasi</span>
							<br />
							Jerawat pada perempuan sering kali dikaitkan dengan peruahan
							hormonal. Pernah nggak sih kalian jerawat ketika momen momen
							menstruasi? Dua studi dalam 3 tahun terakhir, faktanya, menyatakan
							bahwa kemungkinan jerawat muncul saat sindrom premenstruasi (PMS)
							adalah 44%. Wah kalian harus lebih hati-hati ya! Studi dari Cina
							juga menambahkan bahwa salah satu penyebab munculnya jerawat
							adalah rasa sakit saat PMS (dysmenorrhea)
							<br />
							<br />
							<span className="font-bold">Diet</span>
							<br />
							Diet atau makanan yang kita makan selalu jadi topik hangat nih!
							Minley akan menjelaskan secara rinci tentang diet di artikel
							lainnya yah! Secara sederhana, berdasarkan riset, diet tinggi gula
							dan tinggi produk susu akan meningkatkan kemungkinan kita memiliki
							jerawat.
							<br />
							<br />
							<span className="font-bold">Merokok</span>
							<br />
							Fakta tentang merokok dan jerawat masih kontroversial. Terdapat
							beberapa riset yang menyatakan prevalensi jerawat lebih tinggi
							pada perokok aktif dibandingkan dengan mantan perokok (perokok
							yang berhenti). Namun studi lain menjelaskan bahwa jerawat malah
							muncul lebih sedikit di perokok rutin dibandingkan dengan non
							perokok.
							<br />
							<br />
							<span className="font-bold">Kosmetik</span>
							<br />
							Pemakaian kosmetik yang tidak tepat bisa membuat jerawat kita
							lebih muncul. Beberapar iset juga menyebutkan bahwa penggunaan
							skin care yang tidak benar bisa membuat jerawat muncul. Studi dari
							America, dan Iberian menyebutkan bahwa penggunaan skincare yang
							tidak tepat dapat merusak skin barrier dan kelenjar minyak.
							Akhirnya, terjadi ketidakseimbangan dan muncul inflamasi
							(peradangan)
						</p>
					</div>
					<div className="text-center mt-[59px]">
						<span className="h-[7px] w-[7px] bg-[#24324F] rounded-[50%] inline-block"></span>
						<span className="h-[7px] w-[7px] bg-[#24324F] rounded-[50%] inline-block mx-[12px]"></span>
						<span className="h-[7px] w-[7px] bg-[#24324F] rounded-[50%] inline-block"></span>
					</div>
					<div className="mt-[59px]">
						<p>
							<span className="font-bold">Source</span>
							<br />
							https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7527424/
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArtikelPage;
