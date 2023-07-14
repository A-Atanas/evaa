import { styled } from "styled-components";

export const Button = styled.button`
	display: flex;
	align-items: center;
	width: fit-content;
	background-color: #4c65d1;
	color: white;
	border-radius: 5px;
	padding: 0.5em 3em;
	font-weight: bold;
	border: none;
	cursor: pointer;
	font-size: 20px;

	&:active {
		background-color: #304dd1;
	}
`;
