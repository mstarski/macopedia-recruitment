import React, { Factory } from "react";
import { Product } from "../../typdefs/Product";

type CartItemProps = {
	itemData: Product;
	quantity: number;
};

const CartItem: Factory<CartItemProps> = ({ itemData, quantity }) => {
	return (
		<div className="cart-items__item">
			<div
				style={{ backgroundImage: `url('assets/${itemData.img}')` }}
				className="cart-items__item-thumbnail"
			></div>
			<p className="cart-items__item-name">{itemData.name}</p>
			<div className="cart-items__item-controls">
				<div className="cart-items__item-details">
					<p>Ilość</p>
					<p className="cart-items__item-quantity">{quantity}</p>
				</div>
				<div className="cart-items__control-buttons">
					<button>+</button>
					<button>-</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
