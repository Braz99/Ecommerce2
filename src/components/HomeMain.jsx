import React, { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useCart } from "../provider/cart";
import "./styles/home_main_s.css";

export default function HomeMain() {
  let { cart } = useCart();

  let data = require("../api/products.json");

  function handleBuy(cart, item) {
    if (cart.find((objeto) => item.name === objeto.name)) {
      let found = cart.find((objeto) =>
        item.name === objeto.name ? objeto : ""
      );

      found.qtd += 1;

      if (found.qtd - 1 <= 0) {
        found.price = item.price;
      } else {
        found.price += found.price / (found.qtd - 1);
      }
    } else {
      cart.push({
        name: item.name,
        price: item.price,
        qtd: 1,
        image: item.image,
      });
    }

    toast.success(`${item.name} adicionado(a) ao carrinho!`, {
      autoClose: 3000,
      position: "top-center",
      hideProgressBar: true,
    });
  }

  return (
    <main id="container">
      <ul id="list_home">
        {data.map((item, i) => (
          <li key={i}>
            <h2>{item.name}</h2>
            <img src={`assets/${item.image}`} alt={item.name} />
            <h3>R$ {item.price.toFixed(2).replace(".", ",")}</h3>
            <button onClick={() => handleBuy(cart, item)}>Buy</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
