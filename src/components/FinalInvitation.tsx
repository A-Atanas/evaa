import { styled } from "styled-components";
import { Button } from "../style/styled";
import { FaChevronRight } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";

const JoinUs = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-block-start: 15em;
	margin-block-end: 10em;

	h1 {
		margin-block-end: 0;
		font-size: 44px;
		font-weight: 800;
	}

	p {
		margin-block-end: 3em;
		margin-block-start: 0;
		font-size: 24px;
		color: #ADB9CB;
	}

	b {
		color: #3854cc;
	}
`;

const Tokenomics = styled.div`
	display: flex;
	align-items: center;

	& > div {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #6272ca;
		margin-left: 2em;
		border-radius: 25px;
		width: 50px;
		height: 50px;
	}
`;

const FinalInvitation = () => {
	return (
		<JoinUs>
			<h1>
				Join our DeFi service with potential <b>800m+</b> users
			</h1>
			<p>
				Join the Evaa Lending Protocol today and experience the future of
				lending.
			</p>
			<Tokenomics>
				<Button>
					Tokenomics
					<FaChevronRight size={10} style={{ marginLeft: "1em" }} />
				</Button>
				<div>
					<BsCameraVideo size={24} color="white" />
				</div>
			</Tokenomics>
		</JoinUs>
	);
};

export default FinalInvitation;
