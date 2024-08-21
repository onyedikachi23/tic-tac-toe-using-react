/** @format */

import { useEffect, useRef, useState } from "react";

export default function PickPlayerCard() {
	const [selectedPlayer, setSelectedPlayer] = useState("");
	const defaultPlayerRef = useRef(null);

	function handleSetPlayer(event) {
		setSelectedPlayer(event.target.id);
	}

	useEffect(() => {
		defaultPlayerRef.current.checked = true; // Assuming the first radio button is checked by default

		setSelectedPlayer(defaultPlayerRef.current.id);
	}, []);

	return (
		<div className="pick-player-card flex-wrapper y-flex-wrapper border-box-sizing">
			<h1>PICK PLAYER 1'S MARK</h1>
			<div className="player-choice-container flex-wrapper border-box-sizing">
				<label
					className={`player-choice-label border-box-sizing flex-wrapper smoothly-transitioned ${
						selectedPlayer === "x-player" ? "selected" : ""
					}`}
					htmlFor="x-player">
					<input
						ref={defaultPlayerRef}
						onChange={handleSetPlayer}
						type="radio"
						name="player"
						id="x-player"
						className="player-choice-input"
						// checked={true}
					/>
					<svg
						className="player-icon-svg"
						width="64"
						height="64"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
							fill="#31C3BD"
							fillRule="evenodd"></path>
					</svg>
				</label>
				<label
					className={`player-choice-label border-box-sizing flex-wrapper smoothly-transitioned ${
						selectedPlayer === "o-player" ? "selected" : ""
					}`}
					htmlFor="o-player">
					<input
						onChange={handleSetPlayer}
						type="radio"
						name="player"
						id="o-player"
						className="player-choice-input"
					/>
					<svg
						className="player-icon-svg"
						width="64"
						height="64"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
							fill="#F2B137"></path>
					</svg>
				</label>
			</div>
			<p>
				<strong>REMEMBER</strong>: X GOES FIRST
			</p>
		</div>
	);
}
