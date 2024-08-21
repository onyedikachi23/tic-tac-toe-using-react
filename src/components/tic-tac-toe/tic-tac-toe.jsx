/** @format */

import { useReducer } from "react";
import GameIntro from "./states-components/game-intro/game-intro";
import "./tic-tac-toe.css";
import GameStatusProvider, {
	gameStatusReducer,
	useGameStatus,
} from "./game-status-providers/game-status-context-provider";
import GamePlay from "./states-components/game-play/game-play";

export default function TicTacToe() {
	const [gameStatus, updateGameStatus] = useReducer(gameStatusReducer, {
		type: "gameIntro", // default value
	});

	return (
		// GameStatusProvider provides the gameStatus state and its update function using context API to all nested components
		<GameStatusProvider
			gameStatus={gameStatus}
			updateGameStatus={updateGameStatus}>
			{gameStatus.type === "gameIntro" ? <GameIntro /> : <GamePlay />}
		</GameStatusProvider>
	);
}
