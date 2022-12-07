import React, { useState } from "react";
import {
	QuestionInput,
	QuestionRadio,
	QuestionChoose,
} from "components/molecules";
import { yesOrNOChoosen } from "constans";
import { DoubleButton } from "components/atoms";

const AssessmentStory = ({ onsubmit, onPrev }) => {
	const onChange = (e) => console.log(e.target.value);

	const [animateActive, setAnimateActive] = useState([]);

	const handleCLickInput = (val) => {
		setAnimateActive((old) => [...old, val]);
	};

	const handleClass = (val) => {
		return `px-[30px] py-[26px] mt-5 pb-[16px] transition border-l-4 ${
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
				Cerita Jerawat Lengkap!
			</h1>
			<p className="font-inter mt-[20px] max-w-[775px]">
				Ini adalah fase terakhir nih, perjuanganmu mengetahui jerawat sudah
				hampir selesai. Terakhir minley mau tau cerita kamu yang lain untuk
				menentukan skala risiko berjerawat!
			</p>
			<p className="font-inter mt-[64px] max-w-[348px] font-bold text-2xl">
				Pertanyaan
			</p>
			<div className={handleClass("friendacne")}>
				<QuestionRadio
					question="Apakah kamu memiliki kerabat dekat yang juga punya jerawat?"
					descDisabled
					questionNumber={1}
					options={yesOrNOChoosen}
					handleChange={(e) => handleChange(e, "friendacne")}
				/>
			</div>
			<div className={handleClass("workactivity")}>
				<QuestionRadio
					question="Apakah kamu cenderung memiliki aktivitas/pekerjaan yang mengharuskan kamu ada di luar dan/atau memproduksi banyak keringat?"
					descDisabled
					questionNumber={2}
					options={yesOrNOChoosen}
					handleChange={(e) => handleChange(e, "workactivity")}
				/>
			</div>
			<div className={handleClass("workactivityinput")}>
				<QuestionInput
					inputLable="Input text"
					question="Apakah kamu cenderung memiliki aktivitas/pekerjaan yang mengharuskan kamu ada di luar dan/atau memproduksi banyak keringat?"
					questionNumber={3}
					descDisabled
					onChange={onChange}
					handleClick={() => handleCLickInput("workactivityinput")}
				/>
			</div>
			<div className={handleClass("workactivitychoose")}>
				<QuestionChoose
					questionNumber={4}
					question="Apakah kamu cenderung memiliki aktivitas/pekerjaan yang mengharuskan kamu ada di luar dan/atau memproduksi banyak keringat?"
					descDisabled
					handleCLick={() => handleCLickInput("workactivitychoose")}
				/>
			</div>
			<DoubleButton onPrev={onPrev} onsubmit={onsubmit} />
		</div>
	);
};

export default AssessmentStory;
