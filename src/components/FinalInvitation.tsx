import { styled } from "styled-components";
import { Button } from "../style/styled";
import { FaChevronRight } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";

const JoinUs = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-block: 5em;

	h1 {
		margin-block-end: 0;
	}

	p {
		margin-block-end: 3em;
	}

	b {
		color: #3854cc;
	}
`;

const Tokenomics = styled.div`
	display: flex;
	align-items: center;

	& > div {
		background-color: #6272ca;
		margin-left: 2em;
		border-radius: 2em;
	}

	svg {
		padding: .5em;
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
