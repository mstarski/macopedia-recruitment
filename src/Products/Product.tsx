import React, { Factory } from "react";
import { Product as ProductProps } from '../../typdefs/Product';

const Product: Factory<ProductProps> = ({ name, price, img }) => {
	return (
		<li className="product-list__item">
			<div
				style={{ backgroundImage: `url('assets/${img}')` }}
				className="product-list__thumbnail"
			></div>
			<p className="product-list__item-description">
				<span>{name}</span>
				<span>{price}{" zł"}</span>
			</p>
			<button className="btn">Dodaj do koszyka</button>
		</li>
	);
};

export default Product;
