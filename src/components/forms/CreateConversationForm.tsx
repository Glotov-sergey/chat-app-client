import React, { FC } from 'react';
import {
	InputContainer,
	InputField,
	InputLabel,
	SubmitBtn,
	TextField
} from '../../utils/styles';
import styles from './index.module.scss';

const CreateConversationForm: FC = () => {
	return (
		<form className={styles.createConversationForm}>
			<section className={styles.inputBlock}>
				<InputContainer backgroundColor="#161616">
					<InputLabel htmlFor="recipient">Recipient</InputLabel>
					<InputField id="recipient" placeholder="Type here..." />
				</InputContainer>
			</section>
			<section className={styles.inputBlock}>
				<InputContainer backgroundColor="#161616">
					<InputLabel htmlFor="message">Message (optional)</InputLabel>
					<TextField id="message" placeholder="Type here..." />
				</InputContainer>
			</section>
			<SubmitBtn onClick={(e) => e.preventDefault()}>
				Create conversation
			</SubmitBtn>
		</form>
	);
};

export default CreateConversationForm;
