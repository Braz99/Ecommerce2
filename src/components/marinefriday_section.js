import React from "react";
import { useHistory } from "react-router-dom";
import "./styles/section_friday_s.css";

export default function MarineFriday() {
	let history = useHistory();

	function handleDirection() {
		history.push("/marinefriday");
	}
	return (
		<section id="section_marinefriday">
			<p>Não perca a grande Marine Friday, cadastre o teu mail! </p>
			<button id="section_button" onClick={handleDirection}>
				Cadastrar
			</button>
		</section>
	);
}
