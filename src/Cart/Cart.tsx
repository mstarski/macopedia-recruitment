import React, { FC, useContext } from "react";
import { CartContext } from "./UserCart";

const Cart: FC = () => {
	const [cart] = useContext(CartContext);
	console.log(cart);

	return (
		<div className="cart">
			<h1>Koszyk</h1>
			{Object.keys(cart).length ? (
				"hiho"
			) : (
				<h2 className="cart__empty-msg">Twój koszyk jest pusty!</h2>
			)}
		</div>
	);
};

export default Cart;
