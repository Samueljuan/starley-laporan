import React from "react";
import KeyIcon from "assets/icons/key-fill.svg";
import MailIcon from "assets/icons/mail-fill.svg";
// import AppleIcon from "assets/icons/apple-fill.svg";
// import FbIcon from "assets/icons/fb-icon.svg";
// import GoogleIcon from "assets/icons/google-fill.svg";
import { InputAuth } from "components/atoms";

const Login = () => {
	return (
		<div className="bg-[#A3B7B3] __woman-bg-auth-page py-[154px] flex justify-center w-full text-textDefault">
			<div className="w-[590px] px-[59px] pt-[112px] bg-white rounded-lg h-[720px]">
				<p className="text-[48px] font-playfair font-bold">Masuk</p>
				<div className="mt-6">
					<InputAuth icon={MailIcon} placeholder="Email" />
					<InputAuth type="password" icon={KeyIcon} placeholder="Kata Sandi" />
				</div>
				{/* <div className="border-b border-[#24324F] border-opacity-[0.4] flex justify-center">
					<p className="-mb-[10px] bg-white px-5">Atau masuk dengan</p>
				</div> */}
				{/* <div className="flex justify-center items-center mt-8 space-x-3 mb-[52px]">
					<div className="w-[42px] h-[42px] rounded-full border-2 border-[#354440] flex items-center justify-center cursor-pointer">
						<img src={FbIcon} alt="fb-icon" />
					</div>
					<div className="w-[42px] h-[42px] rounded-full border-2 border-[#354440] flex items-center justify-center cursor-pointer">
						<img src={GoogleIcon} alt="google-icon" />
					</div>
					<div className="w-[42px] h-[42px] rounded-full border-2 border-[#354440] flex items-center justify-center cursor-pointer">
						<img src={AppleIcon} alt="apple-icon" />
					</div>
				</div> */}
				<button className="font-bold py-5 rounded-full w-full text-white bg-[#1B3E66] text-[18px] mt-[20px]">
					Masuk
				</button>
				<p className="mt-[20px] text-center">
					Belum punya akun?{" "}
					<a href="/auth/register">
						<span className="font-semibold hover:text-[#1B3E66] cursor-pointer">
							Daftar akun
						</span>
					</a>
				</p>
			</div>
		</div>
	);
};

export default Login;
