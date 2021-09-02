import Filter from "./components/Filter";
import Loading from "./components/Loading";
import Streamer from "./components/Streamer";
import { useGlobalContext } from "./context";

function App() {
	const { streamersData, isLoading } = useGlobalContext();
	return (
		<main className="streamers">
			<header className="title">
				<h1>
					TWITCH <span>STREAMERS</span>
				</h1>
				<Filter />
			</header>
			<section>
				{isLoading ? (
					<Loading />
				) : (
					streamersData.map((streamerData, index) => (
						<Streamer {...streamerData} key={index} />
					))
				)}
			</section>
		</main>
	);
}

export default App;
