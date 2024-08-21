/** @format */

import { createContext, useContext, useReducer } from "react";

// To ease state management, the game status state will be handled here.

export function gameStatusReducer(currentState, action) {
	console.log(action);

	return action;
}

const [GameStatusContext, UpdateGameStatusContext] = [
	createContext(null),
	createContext(null),
];

export default function GameStatusProvider({ children, gameStatus, updateGameStatus}) {

	return (
		<GameStatusContext.Provider value={gameStatus}>
			<UpdateGameStatusContext.Provider value={updateGameStatus}>
				{children}
			</UpdateGameStatusContext.Provider>
		</GameStatusContext.Provider>
	);
}

// Then for the children components needing the game status
export function useGameStatus() {
	return useContext(GameStatusContext);
}

export function useUpdateGameStatus() {
	return useContext(UpdateGameStatusContext);
}
