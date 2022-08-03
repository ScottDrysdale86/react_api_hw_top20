import React, { useState, useEffect } from "react";
import SongList from "../components/SongList";
import SongDetail from "../components/SongDetails";
import "./chart.css";

const ChartsContainer = () => {
	const [songs, setSongs] = useState([]);
	const [selectedSong, setSelectedSong] = useState(null);

	useEffect(() => {
		getSongs();
	}, []);

	const getSongs = function () {
		fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
			.then((res) => res.json())
			.then((songs) => setSongs(songs.feed.entry));
	};

	const onSongClick = (song) => {
		setSelectedSong(song);
	};

	return (
		<>
			{selectedSong ? <SongDetail song={selectedSong} /> : null}

			<div className="main-container">
				<SongList songs={songs} onSongClick={onSongClick} />
			</div>
		</>
	);
};

export default ChartsContainer;
