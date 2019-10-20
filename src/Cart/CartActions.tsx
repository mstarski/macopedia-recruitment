import { Cart } from "../../typdefs/Cart";

export function addItem(state: Cart, id: number) {
	if (state[id]) {
		return {
			...state,
			[id]: {
				quantity: state[id].quantity + 1,
			},
		};
	}

	return {
		...state,
		[id]: {
			quantity: 1,
		},
	};
}

function removeItem(state: Cart, id: number) {
	if (!state[id]) {
		throw new Error("Item with given id does not exist!");
	}

	const updatedState = state;
	delete updatedState[id];

	return { ...updatedState };
}

export function incrementItem(state: Cart, id: number) {
	if (!state[id]) {
		throw new Error("Item with given id does not exist!");
	}

	return {
		...state,
		[id]: {
			quantity: state[id].quantity + 1,
		},
	};
}

export function decrementItem(state: Cart, id: number) {
	if (!state[id]) {
		throw new Error("Item with given id does not exist!");
	}

	const updatedQuantity = state[id].quantity - 1;
	if (updatedQuantity === 0) {
		return removeItem(state, id);
	}

	return {
		...state,
		[id]: {
			quantity: updatedQuantity,
		},
	};
}
