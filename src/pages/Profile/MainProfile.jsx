import React from "react";
import { InputAuth } from "components/atoms";
import UserIcon from "assets/icons/user-3-fill.svg";
import MailIcon from "assets/icons/mail-fill.svg";
import CalendarIcon from "assets/icons/calendar.svg";
import LocationIcon from "assets/icons/location.svg";
import KeyIcon from "assets/icons/key-super.svg";
import CallIcon from "assets/icons/call-super.svg";

const MainProfile = ({ changePw }) => {
	return (
		<div>
			<div className="grid grid-cols-[1fr,1fr] font-inter mt-[41px] space-x-[36px]">
				<div>
					<InputAuth icon={UserIcon} placeholder="Nama" />
					<InputAuth
						icon={CalendarIcon}
						placeholder="Tanggal Lahir"
						type="date"
						classIcon="opacity-40"
					/>
					<InputAuth
						icon={LocationIcon}
						placeholder="Wilayah"
						classIcon="opacity-40"
					/>
					<InputAuth icon={MailIcon} placeholder="Email" />
					<div className="grid grid-cols-2 gap-[35px] px-[41px] mb-6">
						<button className="py-[12px] font-semibold font-inter w-full rounded-full text-[#24324F] border border-[#24324F]" onClick={() => changePw(true)}>
							Ubah Kata Sandi
						</button>
						<button className="py-[12px] font-semibold font-inter w-full rounded-full bg-[#24324F] text-white">
							Simpan
						</button>
					</div>
					<button className="py-[12px] font-semibold font-inter w-full rounded-full bg-[#FB8C7C] text-white">
						Keluar
					</button>
				</div>
				<div>
					<InputAuth
						icon={KeyIcon}
						placeholder="ID Member"
						classIcon="opacity-40"
					/>
					<div className="mb-6">
						<p className="text-sm font-inter">Jenis Kelamin</p>
						<div className="flex space-x-5 items-center mt-2">
							<div>
								<input
									className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
									type="radio"
									name="flexRadioDefault"
									id={`flexRadioDefault-laki`}
								/>
								<label
									className="form-check-label inline-block text-black text-sm font-inter"
									htmlFor={`flexRadioDefault-laki`}
								>
									Laki - Laki
								</label>
							</div>
							<div>
								<input
									className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
									type="radio"
									name="flexRadioDefault"
									id={`flexRadioDefault-wanita`}
								/>
								<label
									className="form-check-label inline-block text-black text-sm font-inter"
									htmlFor={`flexRadioDefault-wanita`}
								>
									Perempuan
								</label>
							</div>
						</div>
					</div>
					<InputAuth
						icon={CallIcon}
						placeholder="No Telepon"
						classIcon="opacity-40"
					/>
				</div>
			</div>
		</div>
	);
};

export default MainProfile;
