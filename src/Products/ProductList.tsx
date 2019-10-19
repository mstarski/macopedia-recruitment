import React, { FC } from "react";
import products from "../../data/products";
import Product from "./Product";

const ProductList: FC = () => {
	console.log(products);
	return (
		<ul className="product-list">
			{products.map(product => (
				<Product key={product.name} {...product} />
			))}
		</ul>
	);
};

export default ProductList;
