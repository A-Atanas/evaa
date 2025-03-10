import { styled } from "styled-components";
import logo from "../assets/evaa-logo.png";
import { FiGithub } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";

const FooterContainer = styled.footer`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	padding: 3em 5em;
	background-color: #222940;
	color: white;
	font-weight: bold;
	font-family: Montserrat;
	width: 100%;
`;

const FooterLogo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: end;
	width: 300px;

	h2 {
		margin-left: 1em;
		margin-block: 0;
		font-weight: 600;
		line-height: 20px;
	}
`;

const LogoImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	border-radius: 50%;
	width: 30px;
	height: 30px;

	img {
		width: 30px;
		height: 30px;
	}
`;

const SocialLinks = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 0.5em;
	width: 300px;

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.5em;
		border-radius: 5px;
		padding: 0.2em;
		background-color: transparent;
		border: 1px solid rgba(168, 175, 183, 0.2);
		color: #a8afb7;
		transition: all 0.2s;
		cursor: pointer;

		&:hover {
			background-color: #a8afb7;
			color: #222940;
		}
	}
`;

const JustifyFix = styled.div`
	width: 300px;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<FooterLogo>
				<LogoImage>
					<img src={logo} alt="evaa logotype" />
				</LogoImage>
				<h2>EVAA Protocol</h2>
			</FooterLogo>
			<SocialLinks>
				<a href="#">
					<FiGithub />
				</a>
				<a href="#">
					<LiaTelegram />
				</a>
			</SocialLinks>
			<JustifyFix />
		</FooterContainer>
	);
};

export default Footer;
