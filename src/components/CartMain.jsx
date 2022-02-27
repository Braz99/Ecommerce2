import { useCart } from "../provider/cart";
import CartItem from "./CartItem";
import "./styles/cart_main_s.css";

export default function CartMain() {
  let { cart } = useCart();

  return (
    <main id="container_cart">
      <ul id="list_cart">
        {cart.map((item, i) => (
          <CartItem key={i}>{item}</CartItem>
        ))}
      </ul>
    </main>
  );
}
