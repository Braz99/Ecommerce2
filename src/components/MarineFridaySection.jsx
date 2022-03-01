import useMarineActions from "../hooks/useMarineActions";
import "../styles/components_styles/section_friday_s.css";

export default function MarineFriday() {
  let { handleDirection } = useMarineActions();

  return (
    <section className="section_marinefriday">
      <p>Não perca a grande Marine Friday, cadastre o teu email! </p>
      <button
        className="section_button"
        onClick={() => handleDirection("marinefriday")}
      >
        Cadastrar
      </button>
    </section>
  );
}
