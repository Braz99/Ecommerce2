import useCartActions from "../hooks/useCartActions";

export default function CartItem({ children }) {
  let { handleIncrease, handleDecrease, handleDelete } = useCartActions();

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
