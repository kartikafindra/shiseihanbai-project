import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useFetchData } from '../Config/Context';
import styles from './Navbar.module.css';
import searchData from './searchData';
const Navbar = () => {
	const { data, setData, newData, setNewData } = useFetchData();
	const [clicked, setClicked] = useState(false);
	const [scroll, setScroll] = useState();
	const [search, setSearch] = useState({
		name: null,
		cat: 'ALL',
		priceL: 1000,
		priceH: 100000,
	});

	useEffect(() => {
		window.onscroll = () => {
			setScroll(window.scrollY);
		};
    searchData(data, search, setNewData);
	}, [search]);

	return (
		<nav>
			<div className="flex justify-center">
				<div className={classNames(styles.container)}>
					<div
						className={'flex justify-start items-center space-x-2 py-10'}
						style={{ color: 'rgb(96, 91, 166)' }}
					>
						<h1 className="text-6xl font-medium font xs:text-xl xs:text-center xs:w-full">
							2021
						</h1>
						<h2 className="text-2xl font-semibold xs:hidden sm:hidden md:hidden">
							autumn <br /> &winter
						</h2>
						<h1 className="text-6xl font-medium xs:hidden sm:hidden md:hidden">
							SHISEI STOCK BOOK
						</h1>
					</div>
				</div>
			</div>
			<div
				className={` flex justify-center bg-gray-200 ${
					scroll > 162 ? 'fixed left-0 right-0 top-0 z-10' : 'relative'
				}`}
			>
				<div className={classNames(styles.container)}>
					<div
						className={`text-center mb-5 hidden xs:block sm:block md:block cursor-pointer py-2`}
						onClick={() => setClicked(!clicked)}
					>
						検索する
					</div>
					<div
						className={`flex justify-between items-center xs:flex-col ${
							clicked ? 'xs:flex' : 'xs:hidden'
						}`}
					>
						<div className="flex space-x-2 py-5 xs:flex-col xs:space-x-0 xs:items-center xs:space-y-2 xs:px-5">
							<input
								type="text"
								name="searchName"
								id="searchName"
								className={classNames(styles.inputField)}
								placeholder="商品名・コードで検索..."
								onChange={(e) =>
									setSearch((search) => ({
										...search,
										name: e.target.value,
									}))
								}
							/>
							<input
								type="text"
								name="tag"
								id="tag"
								placeholder="シーズン"
								className={classNames(styles.inputField)}
							/>
							<select
								id="category"
								className={classNames(styles.inputField)}
								onChange={(e) =>
									setSearch((search) => ({
										...search,
										cat: e.target.value,
									}))
								}
							>
								<option defaultValue="CLOTHES">CLOTHES</option>
								<option defaultValue="FASHION">FASHION</option>
								<option defaultValue="ALL" selected>
									ALL
								</option>
							</select>
							<div className="flex items-center">
								<div className="flex items-center">
									<h1 className={`${styles.iconYen}`}>¥</h1>
									<input
										type="number"
										name="lowPriceBound"
										id="lowPriceBound"
										value={`${search.priceL}`}
										onChange={(e) =>
											setSearch((search) => ({
												...search,
												priceL: Number(e.target.value),
											}))
										}
										className={classNames(
											styles.inputField,
											styles.borderField
										)}
									/>
								</div>
								~
								<div className="flex items-center">
									<h1 className={`${styles.iconYen}`}>¥</h1>
									<input
										type="number"
										name="highPriceBound"
										id="highPriceBound"
										value={`${search.priceH}`}
										onChange={(e) =>
											setSearch((search) => ({
												...search,
												priceH: Number(e.target.value),
											}))
										}
										className={classNames(
											styles.inputField,
											styles.borderField
										)}
									/>
								</div>
							</div>
						</div>
						<div className="border-2 max-w-max p-2 xs:hidden rounded-md bg-white cursor-pointer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								className="bi bi-printer"
								viewBox="0 0 16 16"
							>
								<path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
								<path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
