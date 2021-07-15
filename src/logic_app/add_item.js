export default function handleBuy(cart, name, price, image) {
	if (cart.find((objeto) => name === objeto.name)) {
		let item = cart.find((objeto) => (name === objeto.name ? objeto : ""));

		item.qtd += 1;

		item.price += item.price / (item.qtd - 1);
	} else {
		cart.push({ name: name, price: price, qtd: 1, image: image });
	}
}