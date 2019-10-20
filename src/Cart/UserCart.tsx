import React, { FC, useReducer, createContext } from "react";
import { addItem, incrementItem, decrementItem } from "./CartActions";
import { Actions, Action, Cart } from "../../typdefs/Cart";

export const CartContext = createContext(null);

export const actions: Actions = {
	ADD_ITEM: "ADD_ITEM",
	INCREMENT_ITEM: "INCREMENT_ITEM",
	DECREMENT_ITEM: "DECREMENT_ITEM",
};

function saveStateToLocalStorage(state: Cart) {
	const stringifiedData: string = JSON.stringify(state);
		  localStorage.setItem('userCart', stringifiedData);
}

function reducer(state: Cart, action: Action) {
	let newState: Cart = state;
	switch (action.type) {
		case actions.ADD_ITEM:
			newState = addItem(state, action.payload.id);
			saveStateToLocalStorage(newState);
			return newState;
		case actions.INCREMENT_ITEM:
			newState = incrementItem(state, action.payload.id);
			saveStateToLocalStorage(newState);
			return newState;
		case actions.DECREMENT_ITEM:
			newState = decrementItem(state, action.payload.id);
			saveStateToLocalStorage(newState);
			return newState;
		default:
			return newState;
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
