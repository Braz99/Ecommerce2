import useMainAction from "../hooks/useMainAction";

export default function MainItem({ children }) {
  let { handleBuy } = useMainAction();

  return (
    <li>
      <h2 className='name_home'>{children.name}</h2>
      <img className='img_home' src={`assets/${children.image}`} alt={children.name} />
      <h3 className="price_home">R$ {children.price.toFixed(2).replace(".", ",")}</h3>
      <button className="button_buy" onClick={() => handleBuy(children)}>Comprar</button>
    </li>
  );
}
