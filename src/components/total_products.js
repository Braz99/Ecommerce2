import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../provider/cart";

import "react-toastify/dist/ReactToastify.css";
import "./styles/total_s.css";

export default function Total() {
	let history = useHistory();
	let { cart, setCart } = useCart();

	function handleRedirect(event) {
		event.preventDefault();
		let total_value = document.getElementById("total_price").innerText;

		if (cart.length > 0 && total_value !== "R$ 0,00") {
			setCart([]);
			history.push("/endstop");
		} else {
			toast.error("Compre algo primeiro!", {
				position: "top-center",
				hideProgressBar: true,
				autoClose: 2500,
			});
		}
	}
	return (
		<div id="total_area">
			<h2>
				O total dos produtos foi: <span id="total_price">R$ 0,00</span>
			</h2>

			<button id="total_button" onClick={handleRedirect}>
				Finalizar a compra
			</button>
		</div>
	);
}
