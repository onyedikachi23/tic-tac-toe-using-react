/** @format */

export default function PickPlayerCard() {
	return (
		<div className="pick-player-card">
			<h1>PICK PLAYER 1'S MARK</h1>
			<div className="players-container">
				<input type="radio" name="player" id="x-player" />
				<input type="radio" name="player" id="o-player" />
			</div>
			<p>
				<strong>REMEMBER</strong>: X GOES FIRST
			</p>
			<div className="game-start-btns-container flex-wrapper y-flex-wrapper">
				<button>NEW GAME (VS CPU)</button>
				<button>NEW GAME (VS PLAYER)</button>
			</div>
		</div>
	);
}
