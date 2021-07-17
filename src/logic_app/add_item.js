import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function handleBuy(cart, name, price, image) {
	if (cart.find((objeto) => name === objeto.name)) {
		let item = cart.find((objeto) => (name === objeto.name ? objeto : ""));

		item.qtd += 1;

		if((item.qtd -1 ) <= 0) {
			item.price = price
		}else{
		item.price += item.price / (item.qtd - 1);}
	} else {
		cart.push({ name: name, price: price, qtd: 1, image: image });
	}

	toast.success(`${name} adicionado(a) ao carrinho!`, {
		autoClose: 3000 ,
		position: "top-center",
		hideProgressBar: true,
	});
}
