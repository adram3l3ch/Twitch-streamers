import React from "react";
import HoverCard from "./HoverCard";

const Streamer = ({ name, status, game, story, views, logo, url }) => {
	return (
		<a href={url} target="_blank" rel="noreferrer">
			<div className="streamer">
				<HoverCard />
				<div className="logo">
					<img src={logo} alt={name + "_logo"} />
				</div>
				<h2 className="name">{name}</h2>
				<div className="details">
					{status === "offline" ? <h3>OFFLINE</h3> : ""}
					{status === "online" ? <h3>{game}</h3> : ""}
					{status === "online" ? <p>{story}</p> : ""}
				</div>
				<div className="views">
					{status === "online" ? <p>{views} Viewers</p> : ""}
				</div>
				<div className={`status ${status}`}></div>
			</div>
		</a>
	);
};

export default Streamer;
