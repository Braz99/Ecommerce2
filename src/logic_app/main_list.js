import handleBuy from "./add_item";

let i = 0;
let data = require("../api/products.json");

export default function generateMainList(cart) {
	let list = document.getElementById("list_home");

	data.forEach((item) => {
		let item_list = document.createElement("li");
		let item_name = document.createElement("h2");
		let item_price = document.createElement("h3");
		let item_image = document.createElement("img");
		let item_button = document.createElement("button");

		item_button.innerText = "Comprar";
		item_button.addEventListener("click", () =>
			handleBuy(cart, item.name, item.price, item.image)
		);

		item_image.src = "assets/" + item.image;
		item_image.alt = "Imagem de " + item.name;

		item_name.innerText = item.name;
		item_price.innerText = "R$ " + item.price.toFixed(2).replace(".", ",");

		item_list.id = i++;
		item_list.appendChild(item_name);
		item_list.appendChild(item_image);
		item_list.appendChild(item_price);
		item_list.appendChild(item_button);

		list.appendChild(item_list);
	});
}
