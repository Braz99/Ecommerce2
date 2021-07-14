import { generateList } from "./cart_list";

export default function handleRemove(name, cart) {
    if (cart.find((objeto) => name === objeto.name)) {
        let item = cart.find((objeto) => (name === objeto.name ? objeto : ""));

        if (item.qtd > 0) {
            item.qtd -= 1;
            item.price -= item.price / (item.qtd + 1)
        }
        
        let list_cart = document.getElementById('list_cart')
        list_cart.innerHTML = ''

        generateList(cart, list_cart)
    }
}