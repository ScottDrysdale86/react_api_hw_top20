import React from "react";

const Song = ({ song }) => {
	return <li>{song.title.label}</li>;
};

export default Song;
