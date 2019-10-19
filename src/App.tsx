import React, { FC } from "react";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import UserCart from "./Cart/UserCart";

import "./main.scss";

const App: FC = () => {
	return (
		<div className="app">
			<UserCart>
				<Cart></Cart>
				<Products></Products>
			</UserCart>
		</div>
	);
};

export default App;
