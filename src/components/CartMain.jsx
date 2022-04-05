import { useCart } from "../provider/cart";
import CartItem from "./CartItem";
import "../styles/components_styles/cart_main_s.css";

export default function CartMain() {
  let { cart } = useCart();

  return (
    <main className="container_cart">
      <ul className="list_cart">
        {cart.map((item, i) => (
          <CartItem key={i} className="item_cart">
            {item}
          </CartItem>
        ))}
      </ul>
    </main>
  );
}
