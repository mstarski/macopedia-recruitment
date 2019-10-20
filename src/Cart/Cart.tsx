import React, { FC, useContext, useState, useEffect } from "react";
import { CartContext, actions } from "./UserCart";
import CartItems from "./CartItems";

const Cart: FC = () => {
	const [cart, dispatch] = useContext(CartContext);
	const [toggleCart, setToggleCart] = useState(false);
	const [init, setInit] = useState(true);

	useEffect(() => {
		const savedData = localStorage.getItem("userCart");
		if (savedData && init) {
			setInit(false);
			return dispatch({
				type: actions.REPLACE_CART,
				payload: { newState: JSON.parse(savedData) },
			});
		}

		if (init) {
			setInit(false);
			return;
		}
		//Toggle cart after its change
		setToggleCart(true);
	}, [cart]);

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
						<CartItems />
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
