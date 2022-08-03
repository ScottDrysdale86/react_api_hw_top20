import React from "react";
import Song from "./Song";

const SongList = ({ songs }) => {
	const song = songs.map((song, index) => {
		return <Song song={song} key={index} />;
	});

	return (
		<div>
			<ol>{song}</ol>
		</div>
	);
};

export default SongList;
