import { toast } from "react-toastify";
import { useCart } from "../provider/cart";

export default function CartItem({ children, remove }) {
  let { cart, setCart } = useCart();

  function handleDecrease(name) {
    let data = cart.find((item) => item.name === name);

    if (data.qtd > 0) {
      data.qtd -= 1;
      data.price -= data.price / (data.qtd + 1);

      setCart([...cart]);
    }

    if (data.qtd === 0) {
      let newCart = cart.filter((item) => item.name !== name)
      setCart([...newCart]);

      toast.error(`${name} removido(a) do carrinho`, {
        autoClose: 2500,
        position: "top-center",
        hideProgressBar: true,
      });
    }
  }

  function handleIncrease(name) {
    let found = cart.find((item) => name === item.name);
    let priceUnit = found.price / found.qtd;

    found.qtd += 1;
    found.price += priceUnit;

    setCart([...cart]);
  }

  function handleDelete(name) {
    let newCart = cart.filter((item) => name !== item.name);

    setCart([...newCart]);

    toast.error(`${name} removido(a) do carrinho`, {
      autoClose: 2500,
      position: "top-center",
      hideProgressBar: true,
    });
  }

  return (
    <li>
      <img src={`assets/${children.image}`} alt={children.name} />
      <h2>{children.name}</h2>
      <h3>R$ {children.price.toFixed(2).replace(".", ",")}</h3>
      <h3>{children.qtd}</h3>
      <div className="buttons_cart">
        <button
          onClick={() => handleDecrease(children.name)}
          className="button_cart__decrease"
        >
          Menos
        </button>

        <button
          onClick={() => handleIncrease(children.name)}
          className="button_cart__increase"
        >
          Adicionar
        </button>

        <button
          onClick={() => handleDelete(children.name)}
          className="button_cart__delete"
        >
          Remover
        </button>
      </div>
    </li>
  );
}
