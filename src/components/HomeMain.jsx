import React from "react";

import MainItem from "./MainItem";
import "./styles/home_main_s.css";

export default function HomeMain() {
  let data = require("../api/products.json");

  return (
    <main id="container">
      <ul id="list_home">
        {data.map((item, i) => (
          <MainItem key={i}>{item}</MainItem>
        ))}
      </ul>
    </main>
  );
}
