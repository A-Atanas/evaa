import { styled } from "styled-components";
import NavLinks from "./NavLinks";
import logo from "../assets/evaa-logo.png";
import { Button } from "../style/styled";

const Navbar = styled.nav`
	position: sticky;
	top: 0;
	background-color: white;
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 7em;
	font-weight: bold;
	font-size: 16px;
	z-index: 2;
`;

const Header = () => {
	return (
		<Navbar>
			<img src={logo} alt="EVAA logotype" width="48" height="48" />
			<NavLinks />
			<Button>App</Button>
		</Navbar>
	);
};

export default Header;
