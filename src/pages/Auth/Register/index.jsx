import React from "react";
import KeyIcon from "assets/icons/key-fill.svg";
import MailIcon from "assets/icons/mail-fill.svg";
import UserIcon from "assets/icons/user-3-fill.svg";
import { InputAuth } from "components/atoms";

const Register = () => {
	return (
		<div className="bg-[#A3B7B3] __woman-bg-auth-page py-[154px] flex justify-center w-full text-textDefault">
			<div className="w-[590px] px-[59px] pt-[82px] bg-white rounded-lg h-[800px]">
				<p className="text-[48px] font-playfair font-bold">Buat Akun</p>
				<div className="mt-6">
					<InputAuth icon={UserIcon} placeholder="Nama" />
					<InputAuth icon={MailIcon} placeholder="Email" />
					<InputAuth type="password" icon={KeyIcon} placeholder="Kata Sandi" />
					<InputAuth type="password" icon={KeyIcon} placeholder="Kata Sandi" />
					<div className="mt-[20px] flex justify-center items-center space-x-3">
						<input
							id="default-checkbox"
							type="checkbox"
							value={true}
							className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<p className=" text-center">
							I agree to the platform accessing my{" "}
							<span className="font-semibold hover:text-[#1B3E66]">
								information
							</span>
						</p>
					</div>
					<button className="font-bold py-5 rounded-full w-full text-white bg-[#1B3E66] mt-[60px] text-[18px]">
						Daftar Akun
					</button>
					<p className="mt-[20px] text-center">
						Sudah punya akun?{" "}
						<span className="font-semibold hover:text-[#1B3E66] cursor-pointer">
							Masuk
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
