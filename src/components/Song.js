import React from "react";
import "./song.css";

const Song = ({ song, onSongClick }) => {
	const handleClick = () => {
		onSongClick(song);
	};

	return <li onClick={handleClick}>{song.title.label}</li>;
};

export default Song;
