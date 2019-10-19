import React, { FC, useState } from "react";
import ProductList from "./ProductList";
import SortSelect from "./SortSelect";
import products from "../../data/products";

const Products: FC = () => {
	const [items, setItems] = useState(products);

	return (
		<>
			<div className="products-topside">
				<h1>Produkty</h1>
				<SortSelect products={items} setProducts={setItems} />
			</div>

			<div>
				<ProductList products={items} />
			</div>
		</>
	);
};

export default Products;
