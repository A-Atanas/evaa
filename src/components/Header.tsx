import { styled } from "styled-components";
import NavLinks from "./NavLinks";
import logo from "../assets/evaa-logo.png";
import { Button } from "../style/styled";

const Navbar = styled.nav`
	position: sticky;
	top: 0;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 7em;
	font-weight: bold;
	font-size: 16px;
	font-family: Montserrat;
	z-index: 2;
	width: 100%;
	padding: auto;

	& > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 1600px;
	}

	.navbarItem {
		width: 200px;
	}
`;

const Header = () => {
	return (
		<Navbar>
			<div>
				<div className="navbarItem">
					<img src={logo} alt="EVAA logotype" width="48" height="48" />
				</div>
				<NavLinks />
				<div className="navbarItem">
					<Button>App</Button>
				</div>
			</div>
		</Navbar>
	);
};

export default Header;
