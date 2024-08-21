/** @format */

import "./game-play.css";

export default function GamePlay() {
	return (
		<div className="root-container">
			<div className="game-header-container flex-wrapper">
				<img
					src="src/assets/images/logo.png"
					alt="TicTacToe game logo"
				/>
				<div className="turn-notifier flex-wrapper">
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
					<span>TURN</span>
				</div>
				<button className="restart-btn">
					<i class="ri-restart-line"></i>
				</button>
			</div>
		</div>
	);
}
