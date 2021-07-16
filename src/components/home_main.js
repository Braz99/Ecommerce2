import React, { useEffect } from "react";
import generateMainList from "../logic_app/main_list";
import { useCart } from "../provider/cart";
import "./styles/home_main_s.css";

export default function HomeMain() {
	let { cart } = useCart();

	useEffect(() => {
		generateMainList(cart);
	});

	return (
		<main id="container">
			<ul id="list_home"></ul>
		</main>
	);
}
