import React from "react";
import {
	QuestionInput,
	QuestionRadio,
	QuestionDate,
} from "components/molecules";
import { DoubleButton } from "components/atoms";
import { genderOpts } from "constans";
import { useState } from "react";

const AssessmentPersonalData = ({ onsubmit, onPrev }) => {
	const onChange = (e) => console.log(e.target.value);
	const [animateActive, setAnimateActive] = useState([]);

	const handleCLickInput = (val) => {
		setAnimateActive((old) => [...old, val]);
	};

	const handleClass = (val) => {
		return `px-[30px] pt-[26px] mt-2 pb-[16px] transition border-l-4 ${
			animateActive.includes(val)
				? "bg-[#EBF1FF] rounded-lg border-l-[#24324F]"
				: "border-l-transparent"
		}`;
	};

	const handleChange = (e, name) => {
		console.log(">>>>>>>>>>>>>>>>>>>", e);
		setAnimateActive((old) => [...old, name]);
	};

	return (
		<div className="pt-[9rem] px-[60px]">
			<h1 className="font-inter mt-[39px] font-bold text-2xl text-textDefault">
				Pertanyaan
			</h1>
			<div className={handleClass("name")}>
				<QuestionInput
					inputLable="Tuliskan nama Kamu disini"
					question="Nama Kamu siapa?"
					questionNumber={1}
					onChange={onChange}
					handleClick={() => handleCLickInput("name")}
				/>
			</div>
			<div className={handleClass("birth")}>
				<QuestionDate
					question="Kamu lahir tanggal berapa?"
					questionNumber={2}
					options={genderOpts}
					handleCLick={() => handleCLickInput("birth")}
				/>
			</div>
			<div className={handleClass("gender")}>
				<QuestionRadio
					question="Apa jenis kelamin Kamu?"
					questionNumber={3}
					options={genderOpts}
					handleChange={(e) => handleChange(e, "gender")}
					name="gender"
				/>
			</div>
			<div className={handleClass("city")}>
				<QuestionInput
					inputLable="Dimana kota asal kamu?"
					question="Masukkan asal kota kamu disini"
					questionNumber={4}
					onChange={onChange}
					handleClick={() => handleCLickInput("city")}
				/>
			</div>
			<div className={handleClass("skindesc")}>
				<QuestionInput
					inputLable="Apa masalah kulit yang paling mengganggu kamu dan ingin kamu selesaikan?"
					question="Ceritakan masalah kulit kamu"
					questionNumber={5}
					onChange={onChange}
					handleClick={() => handleCLickInput("skindesc")}
				/>
			</div>
			<div>
				<DoubleButton onsubmit={onsubmit} onPrev={onPrev} />
			</div>
		</div>
	);
};

export default AssessmentPersonalData;
