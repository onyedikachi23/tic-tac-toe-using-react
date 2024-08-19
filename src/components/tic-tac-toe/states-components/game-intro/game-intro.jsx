/** @format */
import "./game-intro.css";
import PickPlayerCard from "./pick-player-card";

export default function GameIntro() {
	return (
		<div className="game-intro-container root-container flex-wrapper y-flex-wrapper">
			<div className="logo-img-container">
				<img src="src/assets/images/logo.png" alt="" />
			</div>
			<PickPlayerCard />
		</div>
	);
}
