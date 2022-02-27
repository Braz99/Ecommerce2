import { useHistory } from "react-router";
import useMarineActions from "../hooks/useMarineActions";
import "./styles/marinefriday_s.css";

export default function MarineFridayMain() {
  let history = useHistory();
  let { handleEmailChange, handleSubmit, email } = useMarineActions();

  return (
    <main id="container_friday">
      <h1 id="title_promo">
        <span id="title_marine">Marine</span> Friday = Promoções surpreendentes!
      </h1>

      <p id="text">
        Móveis e eletrodomésticos com até 50% de desconto. A{" "}
        <span id="title_marine">Marine</span> Friday está chegando, não perca
        nenhuma <span id="promotion">promoção</span>, cadastre já o teu email!
      </p>

      <form id="form_email" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          inputMode="email"
          value={email}
          onChange={handleEmailChange}
        ></input>
        <button id="email_button">Cadastrar</button>
      </form>

      <button
        id="home_button"
        onClick={() => {
          history.push("./");
        }}
      >
        Ir para o site
      </button>
    </main>
  );
}
