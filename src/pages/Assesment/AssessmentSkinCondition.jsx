import React, { useState } from "react";
import { QuestionRadio } from "components/molecules";
import { dirtyCondition, sensitiveCondition } from "constans";
import { DoubleButton } from "components/atoms";

const AssessmentSkinCondition = ({ onsubmit, onPrev }) => {
  const [animateActive, setAnimateActive] = useState([]);

  const handleChange = (e, name) => {
    setAnimateActive((old) => [...old, name]);
  };

  const handleClass = (val) => {
    return `"mt-5 mb-5 px-[30px] py-[26px] transition border-l-4 ${
      animateActive.includes(val)
        ? "bg-[#EBF1FF] rounded-lg border-l-[#24324F]"
        : "border-l-transparent bg-white"
    }`;
  };

  return (
    <div className="pt-[9rem] px-[60px] bg-[#F8F8F8]">
      <h1 className="font-inter mt-[39px] max-w-[348px] font-bold text-2xl text-textDefault">
        Biarkan Kami tau Kondisi Kulit Kamu!
      </h1>
      <p className="font-inter mt-[20px] max-w-[528px] text-textDefault">
        Minley mau tau kondisi kulit kamu nih supaya bisa ngasih diagnosa dan
        treatment yang tepat!
      </p>
      <p className="font-inter mt-[64px] mb-3 max-w-[348px] font-bold text-2xl text-textDefault">
        Pertanyaan
      </p>
      <div className={handleClass("howyourskin")}>
        <QuestionRadio
          question="Gimana sih tipe kulit kamu"
          questionNumber={1}
          options={dirtyCondition}
          handleChange={(e) => handleChange(e, "howyourskin")}
        />
      </div>
      <div className={handleClass("howsensitive")}>
        <QuestionRadio
          question="Seberapa sensitf kulit kamu?"
          questionNumber={2}
          descDisabled
          options={sensitiveCondition}
          handleChange={(e) => handleChange(e, "howsensitive")}
        />
      </div>
      <DoubleButton onPrev={onPrev} onsubmit={onsubmit} />
    </div>
  );
};

export default AssessmentSkinCondition;
