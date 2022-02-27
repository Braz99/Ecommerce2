import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../provider/cart";
import "./styles/total_s.css";

export default function TotalCart() {
  let history = useHistory();
  let [totalPrice, setTotalPrice] = useState(0.0);

  let { cart, setCart } = useCart();

  useEffect(() => {
    let priceItems = cart.reduce((a, b) => a + b.price, 0);

    setTotalPrice(priceItems);
  }, [cart]);

  function handleRedirect(event) {
    event.preventDefault();

    if (cart.length > 0) {
      setCart([]);
      history.push("/endstop");
    } else {
      toast.error("Compre algo primeiro!", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2500,
        toastId: 1,
      });
    }
  }

  return (
    <div className="total_area">
      <h2>
        Total dos produtos:
        <span className="total_price">
          R$ {totalPrice.toFixed(2).replace(".", ",")}
        </span>
      </h2>

      <button className="total_button" onClick={handleRedirect}>
        Finalizar a compra
      </button>
    </div>
  );
}
