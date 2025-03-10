import { styled } from "styled-components";
import SellingPoints from "./SellingPoints";
import Roadmap from "./Roadmap";
import RunByCommunity from "./RunByCommunity";
import FinalInvitation from "./FinalInvitation";
import bitcoin from "../assets/bitcoin.png";
import ethereum from "../assets/ethereum.png";
import ton from "../assets/ton.png";
import tether from "../assets/tether.png";
import usdt from "../assets/usdt.png";

const Coins = styled.div`
	display: flex;
	justify-content: space-around;
	margin-block: 225px 180px;

	img {
		height: 90px;
		object-fit: cover;
	}
`;

const MainContent = styled.main`
	display: flex;
	flex-direction: column;
	font-family: Cairo;
	width: 1400px;
`;

const Main = () => {
	return (
		<MainContent>
			<SellingPoints />
			<Coins>
				<img src={bitcoin} alt="Bitcoin" />
				<img src={ethereum} alt="Ethereum" />
				<img src={ton} alt="TON" />
				<img src={tether} alt="Tether" />
				<img src={usdt} alt="USDT" />
			</Coins>
			<Roadmap />
			<RunByCommunity />
			<FinalInvitation />
		</MainContent>
	);
};

export default Main;
