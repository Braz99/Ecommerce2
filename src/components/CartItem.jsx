import { toast } from "react-toastify";
import { useCart } from "../provider/cart";

export default function CartItem({ children, remove }) {
  let { cart, setCart } = useCart();

  function handleRemove(name) {
    let data = cart.find((item) => item.name === name);

    if (data.qtd > 0) {
      data.qtd -= 1;
      data.price -= data.price / (data.qtd + 1);

      setCart([...cart]);
    }

    if (data.qtd === 0) {
      setCart(cart.filter((item) => item.name !== name));

      toast.error(`${name} removido(a) do carrinho`, {
        autoClose: 2500,
        position: "top-center",
        hideProgressBar: true,
      });
    }
  }

  return (
    <li>
      <img src={`assets/${children.image}`} alt={children.name} />
      <h2>{children.name}</h2>
      <h3>{children.price.toFixed(2).replace(".", ",")}</h3>
      <h3>{children.qtd}</h3>
      <button
        onClick={() => handleRemove(children.name)}
        className="button_cart"
      >
        Remover
      </button>
    </li>
  );
}
