import React, { useState, useContext } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
	let [cart] = useState([]);

	return (
		<CartContext.Provider value={{ cart}}>
			{props.children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);