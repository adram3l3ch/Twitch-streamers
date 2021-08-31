import Filter from "./components/Filter";
import Streamer from "./components/Streamer";
import { useGlobalContext } from "./context";

function App() {
	const { streamersData } = useGlobalContext();
	return (
		<main className="streamers">
			<header className="title">
				<h1>
					TWITCH <span>STREAMERS</span>
				</h1>
				<Filter />
			</header>
			<section>
				{streamersData.map((streamerData, index) => (
					<Streamer {...streamerData} key={index} />
				))}
			</section>
		</main>
	);
}

export default App;
