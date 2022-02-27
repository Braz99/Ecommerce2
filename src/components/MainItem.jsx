import useMainAction from "../hooks/useMainAction";

export default function MainItem({ children }) {
  let { handleBuy } = useMainAction();

  return (
    <li>
      <h2>{children.name}</h2>
      <img src={`assets/${children.image}`} alt={children.name} />
      <h3>R$ {children.price.toFixed(2).replace(".", ",")}</h3>
      <button onClick={() => handleBuy(children)}>Buy</button>
    </li>
  );
}
