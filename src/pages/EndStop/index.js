import React from "react";
import { useHistory } from "react-router-dom";
import '../../components/styles/endstop_s.css'

export default function EndStop() {
    let history = useHistory()
    function handleHome(event) {
        event.preventDefault()
        history.push('/')
    }
	return (
		<main id="container_endstop">
			<h2 id='endstop_title'>Compra Finalizada</h2>
			<p>Muito obrigado pelo apoio, tua compra chegará em breve! </p>
			<button onClick={handleHome}>Início</button>
		</main>
	);
}
