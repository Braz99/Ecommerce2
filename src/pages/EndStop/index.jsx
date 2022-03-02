import useMarineActions from "../../hooks/useMarineActions";
import "../../styles/components_styles/endstop_s.css";

export default function EndStop() {
  let { handleDirection } = useMarineActions();

  return (
    <main className="container_endstop">
      <h2 className="endstop_title">Compra Finalizada</h2>
      <p>Muito obrigado pelo apoio, tua compra chegará em breve! </p>
      <button onClick={() => handleDirection("")}>Início</button>
    </main>
  );
}
