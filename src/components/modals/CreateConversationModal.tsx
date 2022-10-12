import React, {
	FC,
	createRef,
	Dispatch,
	SetStateAction,
	useEffect
} from 'react';
import { OverlayStyle } from '../../utils/styles';
import CreateConversationForm from '../forms/CreateConversationForm';
import { ModalContainer, ModalContentBody, ModalHeader } from '.';
import { RiCloseCircleLine } from 'react-icons/ri';
import styles from './index.module.scss';

type ICreateModalProps = {
	setShow: Dispatch<SetStateAction<boolean>>;
};

const CreateConversationModal: FC<ICreateModalProps> = ({ setShow }) => {
	const ref = createRef<HTMLDivElement>();

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) =>
			e.key === 'Escape' && setShow(false);
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	});

	const handleClickOverlay = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		const { current } = ref;
		if (current === e.target) {
			setShow(false);
		}
	};
	return (
		<OverlayStyle ref={ref} onClick={handleClickOverlay}>
			<ModalContainer>
				<ModalHeader>
					<h1>Create a Conversation</h1>
					<RiCloseCircleLine
						onClick={() => setShow(false)}
						className={styles.icon}
						size={35}
						color="white"
					/>
				</ModalHeader>
				<ModalContentBody>
					<CreateConversationForm />
				</ModalContentBody>
			</ModalContainer>
		</OverlayStyle>
	);
};

export default CreateConversationModal;
