import styled from 'styled-components';
import { InputContainerProps } from './styleTypes';

export const MainTitle = styled.h1`
	text-align: center;
	margin-bottom: 10px;
`;

export const InputField = styled.input`
	width: 100%;
	margin: 4px 0;
`;

export const InputContainer = styled.div<InputContainerProps>`
	background: ${(prop) => prop.backgroundColor || '#131313'};
	padding: 12px 16px;
	border-radius: 10px;
	width: 100%;
`;

export const InputLabel = styled.label`
	display: block;
	color: #8f8f8f;
	margin: 4px 0;
`;

export const SubmitBtn = styled.button`
	width: 100%;
	background: #600df8;
	cursor: pointer;
	padding-top: 20px;
	padding-bottom: 20px;
	font-size: 18px;
	font-weight: 600;
	border-radius: 10px;
	transition: all 0.2s ease;

	&:hover {
		background: #5104d3;
		color: #d2d2d2;
	}

	&:focus {
		border: 1px solid white;
	}
`;

export const ChangeAuthText = styled.p`
	color: white;
	font-size: 16px;
	text-align: center;

	a {
		text-decoration: none;
	}
`;

export const ConversationSidebarStyle = styled.aside`
	position: absolute;
	top: 0;
	left: 0;
	background: #1a1a1a;
	border-right: 1px solid #343434;
	height: 100%;
	padding-top: 75px;
	width: 300px;
	overflow-y: auto;
	scrollbar-color: transparent;

	&::-webkit-scrollbar {
		width: 2px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgba(81, 4, 211, 0.38);
	}

	&::-webkit-scrollbar-track {
		background-color: transparent;
	}

	& header {
		background-color: #1a1a1a;
		position: absolute;
		width: 100%;
		height: 75px;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #343434;

		h1 {
			font-size: 18px;
			font-weight: 600;
		}
	}
`;

export const ConversationChannelPageStyle = styled.div`
	min-height: 100vh;
	height: 100%;
	margin-left: 300px;
`;

export const ConversationContactBlock = styled.div`
	display: flex;
	padding: 15px;
	gap: 15px;
	align-items: center;
	cursor: pointer;
	transition: background-color 0.2s ease-in;
	&:not(:last-child) {
		border-bottom: 1px solid #343434;
	}

	&:hover {
		background: #000;
	}
`;

export const OverlayStyle = styled.div`
	height: 100% !important;
	min-height: 100vh;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;
`;

export const ModalContainerStyle = styled.div`
	background-color: #121212;
	width: 650px;
	border-radius: 10px;
`;

export const ModalHeaderStyle = styled.div`
	width: 100%;
	padding: 24px;
	border-bottom: 1px solid #343434;
	display: flex;
	justify-content: space-between;
	align-items: center;
	h1 {
		font-size: 22px;
	}
`;

export const ModalContentBodyStyle = styled.div`
	padding: 24px;
`;

export const TextField = styled.textarea`
	width: 100%;
	margin: 4px 0;
	resize: none;
	::-webkit-scrollbar {
		display: none;
	}
`;
