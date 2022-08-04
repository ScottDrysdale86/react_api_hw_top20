import React from "react";
import Song from "./Song";
import './list.css'

const SongList = ({ songs, onSongClick }) => {
	const song = songs.map((song, index) => {
		return <Song song={song} key={index} onSongClick={onSongClick} />;
	});

	return (
		<div>
			<ol>{song}</ol>
		</div>
	);
};

export default SongList;
