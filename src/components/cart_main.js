import React, { useEffect } from "react";
import { useCart } from "../provider/cart";
import "./styles/cart_main_s.css";
import { generateList } from "../logic_app/cart_list";

export default function CartMain() {
	let { cart } = useCart();

	useEffect(() => {
		let list_cart = document.getElementById("list_cart");
		generateList(cart, list_cart);
	});

	return (
		<main id="container_cart">
			<ul id="list_cart"></ul>
		</main>
	);
}
