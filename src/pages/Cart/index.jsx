import Header from "../../components/Header";
import CartMain from "../../components/CartMain";
import TotalCart from "../../components/TotalCart";
import "../../styles/components_styles/cart_s.css";

export default function Cart() {
  return (
    <div className="layout_cart">
      <Header />
      <CartMain />
      <TotalCart />
    </div>
  );
}
