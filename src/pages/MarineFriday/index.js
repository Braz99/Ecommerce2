import React from "react";
import "./marinefriday_s.css";
import { useHistory } from "react-router";

export default function MarineFriday() {
	let history = useHistory();
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

			<form id="form_email">
				<input type="email" name="email" placeholder="Email"></input>
				<button id="email_button">Cadastrar</button>
			</form>

			<button
				id="home_button"
				onClick={() => {
					history.push("./");
				}}>
				Ir para o site
			</button>
		</main>
	);
}
