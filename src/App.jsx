import React, { useEffect, useMemo, useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	HashRouter,
} from 'react-router-dom';
import Home from './Page/Home';
import { dataContext } from './Config/Context';
import { fetchDataFromAPI } from './Config/FetchDataFromApi';

function App() {
	const [data, setData] = useState([]);
	const [newData, setNewData] = useState([]);
	useEffect(() => {
		async function fetching() {
			const data = await fetchDataFromAPI();
			setData(data);
			setNewData(data);
		}
		fetching();
	}, []);

	return (
		<dataContext.Provider value={{ data, setData, newData, setNewData }}>
			{/* <HashRouter>
				<Router>
					<Switch>
						<Route path={'/'} component={Home} exact />
					</Switch>
				</Router>
			</HashRouter> */}
			<Home />
		</dataContext.Provider>
	);
}

export default App;
