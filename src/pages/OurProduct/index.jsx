import React from "react";
import ProductExamp from "../../assets/prod-examp.png";

const OurProduct = () => {
	const data = [
		{
			id: 1,
		},
		{
			id: 2,
		},
		{
			id: 3,
		},
		{
			id: 4,
		},
		{
			id: 5,
		},
		{
			id: 6,
		},
	];
	return (
		<div className="container mx-auto mt-[100px] md:mt-[182px]">
			<div className="flex items-center justify-center">
				<h1 className="font-bold text-5xl text-textDefault font-playfair">
					Our Product
				</h1>
			</div>
			<div className="mt-16 columns-1 md:columns-3">
				{data.map((x) => {
					return (
						<div
							onClick={() => (window.location.href = "/product/1")}
							key={x.id}
							className={`mb-5 md:mb-0 max-w-sm max-h-[530px] rounded-lg overflow-hidden shadow-lg cursor-pointer ${
								x.id % 2 === 0 && "md:mt-4"
							}`}
						>
							<img
								className="w-full"
								src={ProductExamp}
								alt="Sunset in the mountains"
							/>
							<div className="px-6 py-4 bg-[#96AFB2] hover:bg-[#1B3E66]">
								<div className="text-2xl font-semibold text-white">
									Azarine Acne Spot Serum 20ml
								</div>
								<p className="font-black text-white text-2xl">Rp.50.000</p>
								<span className="text-2xl text-white text-base">Terjual 6</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default OurProduct;
