import React, { FC, useContext } from "react";
import { CartContext } from "../Cart/UserCart";
import products from "../../data/products";

const CartItems: FC = () => {
	const [cart] = useContext(CartContext);
	return <pre>{JSON.stringify(cart)}</pre>;
};


export default CartItems;
