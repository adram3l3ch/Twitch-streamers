import React from "react";
import { useGlobalContext } from "../context";

const Button = ({ name }) => {
	const { active, filter } = useGlobalContext();
	return (
		<button
			className={name === active ? "btn active" : "btn"}
			onClick={() => filter(name)}
		>
			{name}
		</button>
	);
};

export default Button;
