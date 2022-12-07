import React, { useState } from "react";
import { QuestionRadio, QuestionCheckbox } from "components/molecules";
import {
	breastFeeding,
	yesOrNO,
	skincareTypeName,
	serumIngredient,
	goodRetino,
} from "constans";
import { DoubleButton } from "components/atoms";

const AssessmentExperience = ({ onsubmit, onPrev }) => {
	const [animateActive, setAnimateActive] = useState([]);

	const handleCLickInput = (val) => {
		setAnimateActive((old) => [...old, val]);
	};

	const handleClass = (val) => {
		return `px-[30px] pt-[26px] mt-5 pb-[16px] transition border-l-4 ${
			animateActive.includes(val)
				? "bg-[#EBF1FF] rounded-lg border-l-[#24324F]"
				: "border-l-transparent bg-white"
		}`;
	};

	const handleChange = (e, name) => {
		console.log(">>>>>>>>>>>>>>>>>>>", e);
		setAnimateActive((old) => [...old, name]);
	};

	return (
		<div className="pt-[9rem] px-[60px] bg-[#F8F8F8] text-textDefault">
			<h1 className="font-inter mt-[39px] font-bold text-2xl">
				Cerita Pengalaman Kamu!
			</h1>
			<p className="font-inter mt-[20px] max-w-[658px]">
				Semangat!! Sedikit lagi Minley kasih tau kondisi jerawat dan kulit kamu!
			</p>
			<p className="font-inter mt-[64px] max-w-[348px] font-bold text-2xl">
				Pertanyaan
			</p>
			<div className={handleClass("producttype")}>
				<QuestionCheckbox
					question="Apa aja sih jenis produk yang udah kamu pakai?"
					questionNumber={1}
					options={skincareTypeName}
					onClick={() => handleCLickInput("producttype")}
				/>
			</div>
			<div className={handleClass("breastfeeding")}>
				<QuestionRadio
					question="Are you pregnant or breastfeeding?"
					questionNumber={2}
					options={breastFeeding}
					handleChange={(e) => handleChange(e, "breastfeeding")}
				/>
			</div>
			<div className={handleClass("retinol")}>
				<QuestionRadio
					question="Apakah kamu menggunakan produk dengan retinol, hydroquinone, atau steroid topikal?"
					questionNumber={3}
					options={yesOrNO}
					handleChange={(e) => handleChange(e, "retinol")}
				/>
			</div>
			<div className={handleClass("allskincare")}>
				<QuestionCheckbox
					question="Apa saja yang pernah kamu pakai?"
					questionNumber={4}
					options={serumIngredient}
					onClick={() => handleCLickInput("allskincare")}
				/>
			</div>
			<div className={handleClass("retinolgood")}>
				<QuestionRadio
					question="Kulit kamu berespon baik nggak, setelah pakai retinol?"
					questionNumber={5}
					options={goodRetino}
					handleChange={(e) => handleChange(e, "retinolgood")}
				/>
			</div>
			<DoubleButton onPrev={onPrev} onsubmit={onsubmit} />
		</div>
	);
};

export default AssessmentExperience;
