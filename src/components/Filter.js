import React from "react";
import Button from "./Button";

const Filter = () => {
	return (
		<div className="filter">
			<Button name="all" />
			<Button name="online" />
			<Button name="offline" />
		</div>
	);
};

export default Filter;
