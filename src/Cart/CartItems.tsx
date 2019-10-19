import React, { FC, useContext } from "react";
import { CartContext } from "../Cart/UserCart";
import products from "../../data/products";
import CartItem from "./CartItem";

const CartItems: FC = () => {
	const [cart] = useContext(CartContext);
	return (
		<ul className="cart-items">
			{Object.keys(cart).map(itemId => (
				<CartItem
					key={itemId}
					itemData={products[Number.parseInt(itemId)]}
					quantity={cart[itemId].quantity}
				/>
			))}
		</ul>
	);
};

export default CartItems;
