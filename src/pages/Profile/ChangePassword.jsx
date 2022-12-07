import React from "react";
import { InputAuth } from "components/atoms";
import KeyIcon from "assets/icons/key-fill.svg";

const ChangePassword = ({ changePw }) => {
	return (
		<div>
			<div className="grid grid-cols-[1fr,1fr] font-inter mt-[41px] space-x-[36px]">
				<div>
					<InputAuth type="password" icon={KeyIcon} placeholder="Kata Sandi" />
					<InputAuth type="password" icon={KeyIcon} placeholder="Kata Sandi" />

					<div className="grid grid-cols-2 gap-[35px] px-[41px] mb-6">
						<button className="py-[12px] font-semibold font-inter w-full rounded-full text-[#24324F] border border-[#24324F]" onClick={() => changePw(false)}>
							Batal
						</button>
						<button className="py-[12px] font-semibold font-inter w-full rounded-full bg-[#24324F] text-white">
							Ubah Kata Sandi
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChangePassword;
