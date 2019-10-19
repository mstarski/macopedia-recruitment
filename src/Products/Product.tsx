import React, { Factory, useContext } from "react";
import { Product as ProductProps } from "../../typdefs/Product";
import { CartContext, actions } from "../Cart/UserCart";

const Product: Factory<ProductProps> = ({ name, price, img, id }) => {
	const [cart, dispatch] = useContext(CartContext);
	console.log(cart);
	return (
		<li className="product-list__item">
			<div
				style={{ backgroundImage: `url('assets/${img}')` }}
				className="product-list__thumbnail"
			></div>
			<p className="product-list__item-description">
				<span>{name}</span>
				<span>
					{price}
					{" zł"}
				</span>
			</p>
			<button
				onClick={() =>
					dispatch({ type: actions.ADD_ITEM, payload: { id } })
				}
				className="btn"
			>
				Dodaj do koszyka
			</button>
		</li>
	);
};

export default Product;
