import { createContext, useContext, useEffect, useState } from "react";
import { STREAMERS, ENDPOINT, LOGOS } from "./STREAMERS_DATA";

let details = [];
const AppContext = createContext();

const ContextProvider = ({ children }) => {
	const [streamersData, setStreamersData] = useState([]);
	const [active, setActive] = useState("all");

	const pushToDetails = (stream, streamer, index) => {
		if (stream) {
			details.push({
				name: streamer,
				status: "online",
				game: stream.game,
				story: stream.channel.status,
				views: stream.viewers,
				logo: LOGOS[index],
				url: stream.channel.url,
			});
		} else {
			details.push({
				name: streamer,
				status: "offline",
				url: "https://www.twitch.tv/" + streamer,
				logo: LOGOS[index],
			});
		}
	};

	const updateStreamersData = (stream, streamer, index) => {
		if (stream) {
			setStreamersData((data) => [
				...data,
				{
					name: streamer,
					status: "online",
					game: stream.game,
					story: stream.channel.status,
					views: stream.viewers,
					logo: LOGOS[index],
					url: stream.channel.url,
				},
			]);
		} else {
			setStreamersData((data) => [
				...data,
				{
					name: streamer,
					status: "offline",
					url: "https://www.twitch.tv/" + streamer,
					logo: LOGOS[index],
				},
			]);
		}
	};

	const fetchData = () => {
		STREAMERS.forEach((streamer, index) => {
			(async function fetchStreamer() {
				const resp = await fetch(ENDPOINT + streamer);
				const { stream } = await resp.json();
				pushToDetails(stream, streamer, index);
				updateStreamersData(stream, streamer, index);
			})();
		});
	};

	function filter(condition) {
		if (condition === "all") {
			setActive("all");
			setStreamersData(details);
		} else {
			setActive(condition);
			setStreamersData(details);
			setStreamersData((streamers) =>
				streamers.filter((streamer) => streamer.status === condition)
			);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<AppContext.Provider
			value={{
				streamersData,
				active,
				pushToDetails,
				updateStreamersData,
				filter,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { useGlobalContext, ContextProvider };
