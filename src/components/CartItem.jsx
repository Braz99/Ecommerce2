import useCartActions from "../hooks/useCartActions";

export default function CartItem({ children, className }) {
  let { handleIncrease, handleDecrease, handleDelete } = useCartActions();

  return (
    <li className={className}>
      <img src={`assets/${children.image}`} alt={children.name} />
      <h2 className="name">{children.name}</h2>
      <h3 className="price">
        R$ {children.price.toFixed(2).replace(".", ",")}
      </h3>
      <div className="quantity_area">
        <button
          onClick={() => handleIncrease(children.name)}
          className="button_cart__increase"
        >
          Adicionar
        </button>

        <span className="quantity">{children.qtd}</span>

        <button
          onClick={() => handleDecrease(children.name)}
          className="button_cart__decrease"
        >
          Retirar
        </button>
      </div>

      <div className="buttons_cart">
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
