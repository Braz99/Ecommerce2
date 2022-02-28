import { Link } from "react-router-dom";
import "../styles/components_styles/header_s.css";

export default function Header() {
  return (
    <header>
      <span id="logo">
        <Link to="/">Marine</Link>
      </span>

      <nav id="navbar">
        <ul id="menu">
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
