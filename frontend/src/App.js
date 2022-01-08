import Joke from "./features/Jokes/Joke";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";
function App() {
	return (
		<div className="App">
			<Header />
			<div className="contaniner">
				<Joke />
			</div>
			<Footer />
		</div>
	);
}

export default App;
