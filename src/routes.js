import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MarineFriday from "./pages/MarineFriday";
import Cart from "./pages/Cart";
import EndStop from "./pages/EndStop";

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
				<Route path="/cart">
					<Cart />
				</Route>
				<Route path='/endstop'>
					<EndStop />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
