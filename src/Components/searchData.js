const searchData = (data, search, setNewData) => {
	let filteredData = [];
	data.forEach((datas) => {
		if (search.cat === 'ALL') {
			if (search.name !== null) {
				if (
					datas.name.indexOf(search.name) > -1 ||
					datas.productId === Number(search.name)
				) {
					if (
						datas.price >= search.priceL &&
						datas.price <= search.priceH
					) {
						filteredData.push(datas);
					}
				}
			} else {
				if (datas.price >= search.priceL && datas.price <= search.priceH) {
					filteredData.push(datas);
				}
			}
		}
		if (search.cat === datas.category) {
			if (search.name !== null) {
				if (
					datas.name.indexOf(search.name) > -1 ||
					datas.productId === Number(search.name)
				) {
					if (
						datas.price >= search.priceL &&
						datas.price <= search.priceH
					) {
						filteredData.push(datas);
					}
				}
			} else {
				if (datas.price >= search.priceL && datas.price <= search.priceH) {
					filteredData.push(datas);
				}
			}
		}
	});

	
	if (filteredData.length === 0) {
		setNewData(filteredData);
	} else {
		setNewData(filteredData);
	}
};

export default searchData;
