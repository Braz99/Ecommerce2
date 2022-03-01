import useMarineActions from "../hooks/useMarineActions";
import "../styles/components_styles/section_friday_s.css";

export default function MarineFriday() {
  let { handleDirection } = useMarineActions();

  return (
    <section id="section_marinefriday">
      <p>Não perca a grande Marine Friday, cadastre o teu mail! </p>
      <button
        id="section_button"
        onClick={() => handleDirection("marinefriday")}
      >
        Cadastrar
      </button>
    </section>
  );
}
