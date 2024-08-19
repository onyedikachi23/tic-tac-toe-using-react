/** @format */

import { useReducer } from "react";
import GameIntro from "./states-components/game-intro/game-intro";
import "./tic-tac-toe.css";
import gameStatusReducer from "./reducers/game-status-reducer";

export default function TicTacToe() {
	const [gameStatus, updateGameStatus] = useReducer(gameStatusReducer, {
		type: null,
	});

	return (
		<div>
			{gameStatus.type === "initialGameStart" && (
				<h1>First game start</h1>
			)}
			<GameIntro startGameHandler={updateGameStatus} />
		</div>
	);
}
