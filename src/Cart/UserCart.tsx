import React, { FC, useState, createContext } from "react";

export const CartContext = createContext(null);

const UserCart: FC = props => {
	const [cart, updateCart] = useState({});

	return (
		<CartContext.Provider value={[cart, updateCart]}>
			{props.children}
		</CartContext.Provider>
	);
};

export default UserCart;
