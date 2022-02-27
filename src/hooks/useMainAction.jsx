import { useCart } from "../provider/cart";
import { toast } from "react-toastify";

export default function useMainAction() {
  let { cart } = useCart();

  function handleBuy(item) {
    let found = cart.find((cartItem) => item.name === cartItem.name);

    if (found) {
      found.qtd += 1;
      found.price += item.price;
    } else {
      cart.push({
        name: item.name,
        price: item.price,
        qtd: 1,
        image: item.image,
      });
    }

    toast.success(`${item.name} adicionado(a) ao carrinho!`, {
      autoClose: 3000,
      position: "top-center",
      hideProgressBar: true,
    });
  }

  return { handleBuy };
}
