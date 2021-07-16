import { toast } from "react-toastify";
import { generateList } from "./cart_list";

import "react-toastify/dist/ReactToastify.css";

export default function handleRemove(name, cart) {
	if (cart.find((objeto) => name === objeto.name)) {
		let item = cart.find((objeto) => (name === objeto.name ? objeto : ""));

		if (item.qtd > 0) {
			item.qtd -= 1;
			item.price -= item.price / (item.qtd + 1);
		}

		let list_cart = document.getElementById("list_cart");
		list_cart.innerHTML = "";

		toast.warn(`${name} removido(a) do carrinho`, {
			autoClose: 2500,
			position: "top-center",
			hideProgressBar: true,
		});

		generateList(cart, list_cart);
	}
}
