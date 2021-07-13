import { CartProvider } from "./provider/cart";
import Routes from "./routes";

function App() {
	return (
	<CartProvider>
		<Routes />
	</CartProvider>);
}

export default App;
