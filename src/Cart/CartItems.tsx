import React, { FC, useContext } from "react";
import { CartContext } from "../Cart/UserCart";
import products from "../../data/products";
import CartItem from "./CartItem";
import { Cart } from "../../typdefs/Cart";

function calculateFullPrice(cart: Cart): number {
	let price = 0;
	for (let itemId of Object.keys(cart)) {
		const id = Number.parseInt(itemId);
		price += products[id].price * cart[id].quantity;
	}
	return price;
}

const CartItems: FC = () => {
	const [cart] = useContext(CartContext);
	return (
		<>
			<ul className="cart-items">
				{Object.keys(cart).map(itemId => {
					const itemData = products.find(p => p.id === +itemId);
					return (
						<CartItem
							key={itemId}
							itemData={itemData}
							quantity={cart[itemId].quantity}
						/>
					);
				})}
			</ul>
			<div className="cart-items__full-price">
				<strong>{calculateFullPrice(cart) + "zł"}</strong>
				<p>Suma</p>
			</div>
		</>
	);
};

export default CartItems;
