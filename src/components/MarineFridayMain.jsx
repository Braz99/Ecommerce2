import useMarineActions from "../hooks/useMarineActions";
import "../styles/components_styles/marinefriday_s.css";

export default function MarineFridayMain() {
  let { handleDirection, handleEmailChange, handleSubmit, email } =
    useMarineActions();

  return (
    <main className="container_friday">
      <h1 className="title_promo">
        <span className="title_marine">Marine</span> Friday! Promoções
        surpreendentes!
      </h1>

      <p className="text">
        Móveis e eletrodomésticos com até 50% de desconto. A{" "}
        <span className="title_marine">Marine</span> Friday está chegando, não
        perca nenhuma <span className="promotion">promoção</span>, cadastre já o
        teu email!
      </p>

      <form className="form_email" onSubmit={handleSubmit}>
        <input
          className="input_email"
          type="email"
          placeholder="Email"
          inputMode="email"
          value={email}
          onChange={handleEmailChange}
        ></input>
        <button className="button_email">Cadastrar</button>
      </form>

      <div className="button_div_home">
        <button className="button_to_home" onClick={() => handleDirection("")}>
          Ir para o site
        </button>
      </div>
    </main>
  );
}
