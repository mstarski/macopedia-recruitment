import React, { Factory, useContext } from "react";
import { Product } from "../../typdefs/Product";
import { CartContext, actions } from "../Cart/UserCart";

type CartItemProps = {
	itemData: Product;
	quantity: number;
};

const CartItem: Factory<CartItemProps> = ({ itemData, quantity }) => {
	const [_, dispatch] = useContext(CartContext);
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
					<button
						onClick={() =>
							dispatch({
								type: actions.INCREMENT_ITEM,
								payload: { id: itemData.id },
							})
						}
					>
						+
					</button>
					<button
						onClick={() =>
							dispatch({
								type: actions.DECREMENT_ITEM,
								payload: { id: itemData.id },
							})
						}
					>
						-
					</button>
				</div>
				<span className="cart-items__price-info">
					Cena <strong>{` ${itemData.price * quantity}zł`}</strong>
				</span>
			</div>
		</div>
	);
};

export default CartItem;
