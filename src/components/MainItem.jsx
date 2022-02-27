import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../provider/cart";

export default function MainItem({ children }) {
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

  return (
    <li>
      <h2>{children.name}</h2>
      <img src={`assets/${children.image}`} alt={children.name} />
      <h3>R$ {children.price.toFixed(2).replace(".", ",")}</h3>
      <button onClick={() => handleBuy(children)}>Buy</button>
    </li>
  );
}
