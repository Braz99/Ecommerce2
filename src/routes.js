import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blackfriday from "./pages/Blackfriday";
import Cart from "./pages/Cart";

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/blackfriday">
					<Blackfriday />
				</Route>
				<Route path="/">
					<Cart />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
