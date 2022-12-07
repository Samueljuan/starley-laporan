import React from "react";
import { useSpring, animated } from "react-spring";
import Artikel from "../../components/atoms/Artikel";
import ReactPaginate from "react-paginate";

const ArtikelPage = () => {
	const highlight = [
		{
			id: 1,
			title: "Tips",
		},
		{
			id: 2,
			title: "Jerawat",
		},
		{
			id: 3,
			title: "Info",
		},
	];

	const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

	const styles = useSpring({
		from: { x: -100000 },
		to: { x: 0 },
	});

	const styles2 = useSpring({
		from: { x: 100000 },
		to: { x: 0 },
	});

	return (
		<div className="container mx-auto font-inter">
			<p className="font-bold text-5xl text-textDefault font-playfair mt-[100px] md:mt-[181px] text-center">
				Artikel
			</p>
			<div className="flex mt-[56px]">
				{highlight.map((x) => {
					return (
						<div className="mr-[14px]" key={x.id}>
							<p className="border border-[#24324F] rounded-[50px] px-[24px] py-[8px]">
								{x.title}
							</p>
						</div>
					);
				})}
			</div>

			<animated.div
				style={{
					...styles,
				}}
			>
				<Artikel />
			</animated.div>
			<animated.div
				style={{
					...styles2,
				}}
			>
				<Artikel />
			</animated.div>
			<animated.div
				style={{
					...styles,
				}}
			>
				<Artikel />
			</animated.div>
			<animated.div
				style={{
					...styles2,
				}}
			>
				<Artikel />
			</animated.div>
			<animated.div
				style={{
					...styles,
				}}
			>
				<Artikel />
			</animated.div>
			<ReactPaginate
				breakLabel="..."
				nextLabel=">"
				onPageChange={""}
				pageRangeDisplayed={5}
				pageCount={Math.ceil(items.length / 3)}
				previousLabel="<"
				renderOnZeroPageCount={null}
				className={"flex justify-center mt-[54px]"}
				pageClassName={
					"border h-[50px] w-[50px] flex items-center justify-center"
				}
				previousClassName={
					"border h-[50px] w-[50px] flex items-center justify-center rounded-l-[8px]"
				}
				nextClassName={
					"border h-[50px] w-[50px] flex items-center justify-center rounded-r-[8px]"
				}
				activeClassName={"bg-[#24324F] text-white "}
			/>
		</div>
	);
};

export default ArtikelPage;
