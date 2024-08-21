/** @format */
import { useUpdateGameStatus } from "../../game-status-providers/game-status-context-provider";
import "./game-intro.css";
import PickPlayerCard from "./pick-player-card";

export default function GameIntro() {
	const startGameHandler = useUpdateGameStatus();

	function handleGameStart(opponent) {
		const action = {
			type: "initialGameStart",
			payload: {
				opponent,
			},
		};

		startGameHandler(action);
	}

	return (
		<div className="game-intro-container root-container flex-wrapper y-flex-wrapper">
			<div className="logo-img-container">
				<img
					src="src/assets/images/logo.png"
					alt="TicTacToe game logo"
				/>
			</div>
			<PickPlayerCard />
			<div className="game-start-btns-container flex-wrapper y-flex-wrapper">
				<button
					className="cpu-start-btn"
					onClick={() => handleGameStart("vsCPU")}>
					NEW GAME (VS CPU)
				</button>
				<button
					className="player-start-btn"
					onClick={() => handleGameStart("vsPlayer")}>
					NEW GAME (VS PLAYER)
				</button>
			</div>
		</div>
	);
}
