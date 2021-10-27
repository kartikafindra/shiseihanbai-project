import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Viewer from 'react-viewer';
const Card = ({ data }) => {
	const [visible, setVisible] = useState(false);
	const [checkVis, setCheckVis] = useState(false);
	const [checked, setChecked] = useState({ status: false, data: [] });
	const handleChecked = () => {
		setChecked((checked) => ({ status: !checked.status, data: [data] }));
	};

	return (
		<div
			className={'cursor-pointer relative'}
			onMouseEnter={() => setCheckVis(true)}
			onMouseLeave={() => setCheckVis(false)}
		>
			<input
				type="checkbox"
				id="print"
				name="print"
				value="print"
				className={` ${styles.printCheck} ${
					checkVis || checked.status ? 'block' : 'hidden'
				}`}
				onClick={handleChecked}
			/>
			<Viewer
				visible={visible}
				onClose={() => setVisible(false)}
				images={[{ src: data.imgUrl, alt: 'img' }]}
			/>
			<div className={` ${styles.cards}`} onClick={() => setVisible(true)}>
				<div>
					<img src={data.imgUrl} alt="image" />
				</div>
				<div className="mb-10">
					<div className="my-5">
						<h1
							style={{ color: 'rgb(160, 30, 35)' }}
							className="font-bold"
						>
							{data.productId}
						</h1>
						<h1>{data.name}</h1>
					</div>
					<div>
						<h1 className="text-sm">Price_ {data.price}</h1>
						<h1 className="text-sm">CT_ {data.ct}</h1>
						<h1 className="text-sm">Size_ {data.size}</h1>
						<h1 className="text-sm">
							Material_ {data.material.replace('＜ｃｈ＞', '')}
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
