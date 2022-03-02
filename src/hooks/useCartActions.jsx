import { useCart } from "../provider/cart";
import { toast } from "react-toastify";

export default function useCartActions() {
  let { cart, setCart } = useCart();

  function handleIncrease(name) {
    let found = cart.find((item) => name === item.name);
    let priceUnit = found.price / found.qtd;

    found.qtd += 1;
    found.price += priceUnit;

    setCart([...cart]);
  }

  function handleDecrease(name) {
    let data = cart.find((item) => item.name === name);

    if (data.qtd > 0) {
      data.qtd -= 1;
      data.price -= data.price / (data.qtd + 1);

      setCart([...cart]);
    }

    if (data.qtd === 0) {
      let newCart = cart.filter((item) => item.name !== name);
      setCart([...newCart]);

      toast.error(`${name} removido(a) do carrinho`, {
        autoClose: 2500,
      });
    }
  }

  function handleDelete(name) {
    let newCart = cart.filter((item) => name !== item.name);

    setCart([...newCart]);

    toast.error(`${name} removido(a) do carrinho`, {
      autoClose: 2500,
    });
  }

  return { handleIncrease, handleDecrease, handleDelete };
}
