import React from 'react';
import styles from './Navbar.module.css';
import classNames from 'classnames';
import { useFetchData } from '../Config/Context';
import Card from './Card';
const Products = () => {
  const {data, setData, newData, setNewData} = useFetchData();
	return (
		<section className="flex justify-center">
			<div className={classNames(styles.container)}>
        <div className="py-5 mb-5">
          <h1>Total: {newData.length}</h1>
        </div>
        <div className={`xs:flex-col xs:items-center xs:justify-center xs:flex grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3`}>
          {newData.map((data, index) => {
            return(
              <Card data={data} key={index}/>
            )
          })}
        </div>
      </div>
		</section>
	);
};

export default Products;
