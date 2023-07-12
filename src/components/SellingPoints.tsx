import { styled } from "styled-components";
import { Button } from "../style/styled";
import duck from "../assets/duck.png";
import macbook from "../assets/macbook.png";
import diamond from "../assets/diamond.png";
import { ReactComponent as TonCoin } from "../assets/toncoin.svg";
import { ReactComponent as Blob1 } from "../assets/blob-1.svg";
import { ReactComponent as Blob2 } from "../assets/blob-2.svg";
import { ReactComponent as Medal } from "../assets/medal-icon.svg";
import { ReactComponent as Cross } from "../assets/cross-icon.svg";
import { ReactComponent as Shield } from "../assets/shield-icon.svg";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const Point = styled.div`
	display: flex;
	justify-content: space-between;
	font-weight: bold;
	position: relative;
	margin-left: 10em;

	&:nth-child(2) {
		flex-direction: row-reverse;
		align-items: center;

		img {
			position: absolute;
			left: 0;
			width: 40%;
		}
		svg {
			position: relative;
			bottom: 0;
			right: 0;
			z-index: -1;
		}
	}

	&:last-child {
		img {
			position: relative;
			bottom: 100px;
		}
	}
`;

const Texts = styled.div`
	text-align: start;
	width: 40%;

	h1 {
		background-image: linear-gradient(90deg, #3854cc, #278ce5, #4c65d1);
		background-size: 100%;
		background-repeat: repeat;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
		font-size: 128px;
		font-weight: 900;
		line-height: 100px;
		letter-spacing: -5px;
		height: 256px;
		margin-bottom: 0;
	}

	h3 {
		color: #3854cc;
		font-size: 40px;
		font-weight: 800;
	}

	p {
		color: #8792a4;
		margin-bottom: 2em;
		width: 60%;
		overflow-wrap: break-word;
		word-wrap: break-word;
		hyphens: auto;
		min-height: 4em;
	}

	b {
		color: #54729b;
	}

	.argument {
		width: 100%;
		display: flex;

		p {
			margin-top: 0;
			width: 80%;
		}

		b {
			display: block;
			color: black;
			font-size: 30px;
			font-weight: 800;
			margin-bottom: 10px;
		}

		svg {
			margin-top: 0.5em;
			margin-right: 1em;
		}
	}
`;

const Images = styled.div`
	svg {
		position: absolute;
		bottom: 50px;
		right: 100px;
	}
`;

const CarouselIndicatorContainer = styled.div`
	display: flex;
	column-gap: 10px;
`;

const CarouselIndicator = styled.div`
	width: 15px;
	height: 15px;
	border-radius: 5px;
	background-color: #9ea8d3;
	cursor: pointer;
	transition: all 0.5s;

	&.chosen {
		transform: rotate(45deg);
		background-color: #3854cc;
	}
`;

type CarouselItems = {
	title: string;
	description: string;
};
const SellingPoints = () => {
	const [carouselItems, setCarouselItems] = useState<CarouselItems[]>([
		{
			title: "Our innovative protocol",
			description:
				"Our innovative protocol allows borrowers to access capital quickly and easily, while providing lenders with a high-yield investment opportunity.",
		},
		{
			title: "Lorem ipsum dolor sit amet",
			description: "Blah blah blah blah blah blah blah",
		},
		{
			title: "sdgsdfgdsfgdsfgsdfg",
			description:
				"sghjyufndrtbvdrthbfdnhgfghndfdsvdsfjgvdhfjkvbdhfjvbajehlvblkfbvhijkfdavbhdiakfbvhfdkvbvbhjkfdvbvb",
		},
	]);
	const [chosenText, setChosenText] = useState(0);

	return (
		<div>
			<Point>
				<Texts>
					<h1>EVAA protocol</h1>
					<p>
						The first decentralized lending protocol on <b>TON</b> that lets
						users lend or borrow assets without going to a centralized
						intermediary.
					</p>
					<Button>Application</Button>
				</Texts>
				<Images>
					<img src={duck} alt="Duck holding TONcoin" />
					<svg width="270" height="270">
						<circle cx="135" cy="135" r="135" fill="#7669F7" />
						<TonCoin x="80" y="80" />
					</svg>
				</Images>
			</Point>
			<Point>
				<Texts>
					<h3>{carouselItems[chosenText].title}</h3>
					<p>{carouselItems[chosenText].description}</p>
					<CarouselIndicatorContainer>
						{carouselItems.map((item, index) => (
							<CarouselIndicator
								key={index}
								className={chosenText === index ? "chosen" : ""}
								onClick={() => setChosenText(index)}
							/>
						))}
					</CarouselIndicatorContainer>
				</Texts>
				<Images>
					<Blob1 />
					<img src={macbook} alt="Macbook with EVAA on screen" />
				</Images>
			</Point>
			<Point>
				<Texts>
					<h3>Why EVAA</h3>
					<div className="argument">
						<Medal />
						<p>
							<b>First on TON</b>
							EVAA Protocol is the first TON blockchain lending protocol
						</p>
					</div>
					<div className="argument">
						<Cross />
						<p>
							<b>TON native and wrapped assets</b>
							Evaa Protocol has TON and TON native tokens besides wrapped tokens
							from other chains
						</p>
					</div>
					<div className="argument">
						<Shield />
						<p>
							<b>Decentralized</b>
							The protocol is based on smart contracts — fully decentralized
						</p>
					</div>
					<Button>
						Dashboard
						<FaChevronRight size={10} style={{ marginLeft: "1em" }} />
					</Button>
				</Texts>
				<Images>
					<Blob2 />
					<img src={diamond} alt="Macbook with EVAA on screen" />
				</Images>
			</Point>
		</div>
	);
};

export default SellingPoints;
