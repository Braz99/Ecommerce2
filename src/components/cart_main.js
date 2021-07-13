import React, { useEffect } from "react";
import { useCart } from "../provider/cart";
import "./styles/cart_main_s.css";

export default function CartMain() {
	let { cart } = useCart();
	cart = cart[0];
    

	useEffect(() => {

		let list_cart = document.getElementById("list_cart");
		let id = 0;

        function handleRemove(name) {
            if (cart.find((objeto) => name === objeto.name)) {
                let item = cart.find((objeto) => (name === objeto.name ? objeto : ""));
    
                if (item.qtd > 0) {
                    item.qtd -= 1;
                    item.price -= item.price / (item.qtd + 1)
                    console.log(item.price)
                }
            }
        }
		
		cart.forEach((item) => {
			if (item.qtd > 0) {
				let item_list = document.createElement("li");
				let item_name = document.createElement("h2");
				let item_price = document.createElement("h3");
				let item_qtd = document.createElement("h3");
				let item_image = document.createElement("img");
				let item_button = document.createElement("button");

				item_button.innerText = "Remover";
				item_button.addEventListener("click", () => handleRemove(item.name));
				item_button.classList.add("button_cart");

				item_image.src = "assets/" + item.image;
				item_image.alt = "Imagem de " + item.name;

				item_name.innerText = item.name;
				item_price.innerText = "R$ " + item.price.toFixed(2).replace(".", ",");
				item_qtd.innerText = "Quantidade: " + item.qtd;

				item_list.id = id++;
				item_list.appendChild(item_image);
				item_list.appendChild(item_name);
				item_list.appendChild(item_price);
				item_list.appendChild(item_qtd);
				item_list.appendChild(item_button);

				list_cart.appendChild(item_list);
			}
		});
	});

	return (
		<main id="container_cart">
			<ul id="list_cart"></ul>
		</main>
	);
}
