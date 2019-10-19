import React, { Factory } from "react";
import Product from "./Product";
import { Product as TProduct } from "../../typdefs/Product";

type ListProps = {
	products: Array<TProduct>;
};

const ProductList: Factory<ListProps> = ({ products }) => {
	console.log(products);
	return (
		<ul className="product-list">
			{products.map(product => (
				<Product key={product.id} {...product} />
			))}
		</ul>
	);
};

export default ProductList;
