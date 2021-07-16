import handleRemove from "./remove_item";

let id = 0;

export function generateList(cart, list_cart) {
	let total_p = document.getElementById("total_price");
	let total = 0
	cart.forEach((item) => {
		if (item.qtd > 0) {
			let item_list = document.createElement("li");
			let item_name = document.createElement("h2");
			let item_price = document.createElement("h3");
			let item_qtd = document.createElement("h3");
			let item_image = document.createElement("img");
			let item_button = document.createElement("button");

			item_button.innerText = "Remover";
			item_button.addEventListener("click", () =>
				handleRemove(item.name, cart)
			);
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
			total += item.price;
		}

		total_p.innerText = 'R$ ' + parseFloat(total).toFixed(2).replace('.', ',')
	});
}
