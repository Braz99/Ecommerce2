import MainItem from "./MainItem";
import "../styles/components_styles/home_main_s.css";

export default function HomeMain() {
  let data = require("../api/products.json");

  return (
    <main className="container">
      <ul className="list_home">
        {data.map((item, i) => (
          <MainItem key={i}>{item}</MainItem>
        ))}
      </ul>
    </main>
  );
}
