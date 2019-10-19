import React, { FC, useContext, useState } from "react";
import { CartContext } from "./UserCart";

const Cart: FC = () => {
	const [cart] = useContext(CartContext);
	const [toggleCart, setToggleCart] = useState(false);

	return (
		<div className="cart">
			<h1>Koszyk</h1>

			<button
				className="cart__toggle-cart-btn"
				onClick={() => setToggleCart(!toggleCart)}
			>
				{toggleCart ? "Ukryj koszyk" : "Rozwiń koszyk"}
			</button>

			{toggleCart ? (
				<>
					{Object.keys(cart).length ? (
						"hiho"
					) : (
						<h2 className="cart__empty-msg">
							Twój koszyk jest pusty!
						</h2>
					)}
				</>
			) : null}
		</div>
	);
};

export default Cart;
