import React, { useState } from "react";
import MainProfile from "./MainProfile";
import ChangePassword from "./ChangePassword";

const Profile = () => {
	const [isChangePw, setIsChagePw] = useState(false);
	const nama = "angger";
	return (
		<div className="bg-[#F8F8F8] flex justify-center items-center py-[81px] font-inter">
			<div className="w-[1140px] bg-white rounded-md p-16">
				<div className="flex items-center space-x-[16px]">
					<div>
						<img
							className="w-[64px] h-[64px] object-cover rounded-full"
							src="https://awsimages.detik.net.id/community/media/visual/2019/04/25/6db0c163-6a58-481a-8a42-5b3df0b9e4f7_169.png?w=700&q=90"
							alt="profile"
						/>
					</div>
					<div>
						<p className="font-playfair text-2xl">{nama}</p>
						<p className="font-inter mt-[8px]">Member sejak 08-01-2022</p>
					</div>
				</div>
				{isChangePw ? <ChangePassword changePw={setIsChagePw} /> : <MainProfile changePw={setIsChagePw} />}
			</div>
		</div>
	);
};

export default Profile;
