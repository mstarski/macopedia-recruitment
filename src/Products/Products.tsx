import React, { FC } from "react";
import ProductList from "./ProductList";
import SortSelect from './SortSelect';

const Products: FC = () => {
	return (
		<>
			<div className="products-topside">
				<h1>Produkty</h1>
				<SortSelect/>
			</div>

			<div>
					  <ProductList/>
			</div>
		</>
	);
};

export default Products;
