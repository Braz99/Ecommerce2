import useTotalActions from "../hooks/useTotalActions";
import "../styles/components_styles/total_s.css";

export default function TotalCart() {
  let { totalPrice, handleRedirect } = useTotalActions();

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
