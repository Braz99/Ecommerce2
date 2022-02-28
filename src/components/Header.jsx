import { Link } from "react-router-dom";
import "../styles/components_styles/header_s.css";

export default function Header() {
  return (
    <header>
      <span className="logo">
        <Link to="/">Marine</Link>
      </span>

      <nav className="navbar">
        <ul className="menu">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/cart">Carrinho</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
