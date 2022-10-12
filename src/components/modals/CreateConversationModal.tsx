import React, { FC, createRef } from 'react';
import { OverlayStyle } from '../../utils/styles';
import CreateConversationForm from '../forms/CreateConversationForm';
import { ModalContainer, ModalContentBody, ModalHeader } from '.';

type ICreateModalProps = {
	setShow: any;
};

const CreateConversationModal: FC<ICreateModalProps> = ({ setShow }) => {
	const ref = createRef<HTMLDivElement>();
	return (
		<OverlayStyle
			ref={ref}
			onClick={(e) => {
				const { current } = ref;
				if (current === e.target) {
					setShow(false);
				}
			}}
		>
			<ModalContainer>
				<ModalHeader>
					<h1>Create a Conversation</h1>
				</ModalHeader>
				<ModalContentBody>
					<CreateConversationForm />
				</ModalContentBody>
			</ModalContainer>
		</OverlayStyle>
	);
};

export default CreateConversationModal;
