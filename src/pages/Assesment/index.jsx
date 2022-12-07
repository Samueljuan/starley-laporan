import React, { useState } from "react";
import { TImeline } from "components/molecules";
import AssessmentStarted from "./AssessmentStarted";
import AssessmentPersonalData from "./AssessmentPersonalData";
import AssessmentSkinCondition from "./AssessmentSkinCondition";
import AssessmentAcne from "./AssessmentAcne";
import AssessmentExperience from "./AssessmentExperience";
import AssessmentStory from "./AssessmentStory";
import AssessmentResult from "./AssessmentResult";
import { listData } from "constans";

const Assesment = () => {
	const [timelineActive, setTimelineActive] = useState(1);

	const handleChangeTimeline = (val) => setTimelineActive(val);

	const onsubmit = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		setTimelineActive(timelineActive + 1);
	};
	const onPrev = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		setTimelineActive(timelineActive - 1);
	};

	return (
		<div>
			<section className="grid grid-cols-[339px,1fr] min-h-screen">
				<div className="shadow-lg pt-[9rem] pl-[66px]">
					<TImeline listData={listData} timelineActive={timelineActive} />
				</div>
				<div>
					{timelineActive === 1 ? (
						<AssessmentStarted
							onChangeTImeline={(val) => handleChangeTimeline(val)}
						/>
					) : timelineActive === 2 ? (
						<AssessmentPersonalData onsubmit={onsubmit} onPrev={onPrev} />
					) : timelineActive === 3 ? (
						<AssessmentSkinCondition onsubmit={onsubmit} onPrev={onPrev} />
					) : timelineActive === 4 ? (
						<AssessmentAcne onPrev={onPrev} onsubmit={onsubmit} />
					) : timelineActive === 5 ? (
						<AssessmentExperience onPrev={onPrev} onsubmit={onsubmit} />
					) : timelineActive === 6 ? (
						<AssessmentStory onPrev={onPrev} onsubmit={onsubmit} />
					) : timelineActive === 7 ? (
						<AssessmentResult />
					) : (
						<span></span>
					)}
				</div>
			</section>
		</div>
	);
};

export default Assesment;
