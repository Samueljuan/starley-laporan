import React from "react";

import HeaderImage from "../../assets/images/header-aboutme.svg";
import SubImage from "../../assets/images/sub-image.svg";
import Selfie from "../../assets/icons/selfie.svg";
import Asses from "../../assets/icons/asses.svg";
import Kit from "../../assets/icons/kit.svg";
import Support from "../../assets/icons/support.svg";
import Quote from "../../assets/icons/quote.svg";

const AboutMe = () => {
	const data = [
		{
			id: 1,
			image: Selfie,
			title: "Take a bomb selfie",
			desc: "As simple as that! Go to a well-lit room and snap a selfie. we will analyze your facial problems",
		},
		{
			id: 2,
			image: Asses,
			title: "Assess your skin",
			desc: "In a matter of seconds, the Starley will analyze your skin and provide you with a full analysis of your skin.",
		},
		{
			id: 3,
			image: Kit,
			title: "A personalized treatment kit",
			desc: "Based on your skin analysis, you&apos;ll receive a customized products formulated to achieve your skincare goals.",
		},
		{
			id: 4,
			image: Support,
			title: "Dermatologist chat support",
			desc: "Get unlimited access to 1-on-1 chat support with a dermatologist and free fine-tuning of your medications formulations.",
		},
	];

	return (
		<div className="mt-[100px] md:mt-[181px] container mx-auto">
			<p className="font-bold text-5xl text-textDefault font-playfair text-center">
				Your journey in treating acne starts here.
			</p>
			<div className="flex justify-center mt-[64px]">
				<img className="w-full" src={HeaderImage} alt="Header Image" />
			</div>
			<div className="mt-[51px]">
				<p className="font-normal">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
					pretium dolor purus. Aenean dignissim malesuada velit, nec efficitur
					felis ornare et. Vestibulum vel odio cursus, condimentum sapien ut,
					facilisis neque. Donec ornare, metus sed tempor commodo, velit dui
					suscipit nisi, at pellentesque eros ex sed turpis. Aliquam nec arcu
					tincidunt, pretium lorem a, accumsan augue. Mauris in lacinia elit.
					Phasellus sem mauris, scelerisque et consequat sed, cursus vel sapien.
					Vivamus id molestie augue, gravida malesuada sapien. Praesent lobortis
					eros lacus, nec aliquam arcu placerat sit amet. Integer eu libero eget
					odio bibendum feugiat. Integer aliquam ligula felis, a congue nulla
					egestas quis.
				</p>
			</div>
			<div className="mt-[85px] md:flex">
				<div className="md:w-full md:mr-[56px]">
					<img src={SubImage} alt="Image Founder" />
				</div>
				<div className="">
					<p className="font-normal text-3xl text-textDefault font-playfair">
						This is Chyntia, as one of the founders. She is you.
					</p>
					<p className="mt-[36px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
						pretium dolor purus. Aenean dignissim malesuada velit, nec efficitur
						felis ornare et. Vestibulum vel odio cursus, condimentum sapien ut,
						facilisis neque. Donec ornare, metus sed tempor commodo, velit dui
						suscipit nisi, at pellentesque eros ex sed turpis. Aliquam nec arcu
						tincidunt, pretium lorem a, accumsan augue.
					</p>
				</div>
			</div>
			<div className="mt-[85px]">
				<p className="font-normal text-3xl text-textDefault font-playfair text-center">
					Clear skin in a few steps
				</p>
				<div className="relative overflow-x-scroll overflow-y-hidden flex bg-[#F8F8F8] mt-[33px] px-[23px]">
					{data.map((x) => {
						return (
							<>
								<div
									className="text-center pt-[32px] pb-[50px] px-[18px]"
									key={x.id}
								>
									<div className="flex justify-center ">
										<img src={x.image} alt="Selfie" />
									</div>
									<p className="mt-[26px] font-normal text-2xl">{x.title}</p>
									<p className="mt-[26px] text-base">{x.desc}</p>
								</div>
								<div
									className={
										x.id !== 4
											? "border border-[#D4D4D4] mt-[52px] mb-[84px]"
											: ""
									}
								></div>
							</>
						);
					})}
				</div>
			</div>

			<div className="mt-[136px] flex justify-center items-center">
				<img src={Quote} alt="Quote" />
				<p className="font-bold text-5xl text-textDefault font-playfair text-center absolute">
					Fighting an Acne is a long journey.
					<br />
					Start your own journey with Starley.{" "}
				</p>
			</div>
		</div>
	);
};

export default AboutMe;
