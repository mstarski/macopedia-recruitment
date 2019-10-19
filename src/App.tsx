import React, { FC } from "react";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";

import './main.scss';

const App: FC = () => {
	return (
		<div className="app">
			<Cart></Cart>
			<Products></Products>
		</div>
	);
};

export default App;
