/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./details.css";

const SongDetail = ({ song }) => {
	return (
		<div className="details-box">
			<h2>{song.title.label}</h2>
			<img
				src={song["im:image"][2]["label"]}
				alt={`Image for ${song.title.label}`}
			></img>
			<audio controls key={song.link[1].attributes.href}>
				<source src={song.link[1].attributes.href} type="audio/aac" />
			</audio>
		</div>
	);
};

export default SongDetail;
