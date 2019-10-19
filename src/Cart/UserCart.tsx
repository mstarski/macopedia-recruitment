import React, { FC, useReducer, createContext } from "react";
import { addItem, incrementItem, decrementItem } from "./CartActions";
import { Actions, Action, Cart } from "../../typdefs/Cart";

export const CartContext = createContext(null);

export const actions: Actions = {
	ADD_ITEM: "ADD_ITEM",
	INCREMENT_ITEM: "INCREMENT_ITEM",
	DECREMENT_ITEM: "DECREMENT_ITEM",
};

function reducer(state: Cart, action: Action) {
	switch (action.type) {
		case actions.ADD_ITEM:
			return addItem(state, action.payload.id);
		case actions.INCREMENT_ITEM:
			return incrementItem(state, action.payload.id);
		case actions.DECREMENT_ITEM:
			return decrementItem(state, action.payload.id);
		default:
			return state;
	}
}

const UserCart: FC = props => {
	const [cart, dispatch] = useReducer(reducer, {});

	return (
		<CartContext.Provider value={[cart, dispatch]}>
			{props.children}
		</CartContext.Provider>
	);
};

export default UserCart;
