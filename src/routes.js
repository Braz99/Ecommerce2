import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MarineFriday from "./pages/MarineFriday";
import Cart from "./pages/Cart";

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/marinefriday">
					<MarineFriday />
				</Route>
				<Route path="/">
					<Cart />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
