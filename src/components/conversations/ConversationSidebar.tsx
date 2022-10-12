import React, { FC, useState } from 'react';
import {
	ConversationContactBlock,
	ConversationSidebarStyle
} from '../../utils/styles';
import styles from './index.module.scss';

import { IConversation } from '../../types/conversation';
import { useNavigate } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';
import CreateConversationModal from '../modals/CreateConversationModal';

type SidebarProps = {
	conversations: IConversation[];
};

const ConversationSidebar: FC<SidebarProps> = ({ conversations }) => {
	const navigate = useNavigate();
	const [isShowModal, setIsShowModal] = useState<boolean>(false);

	return (
		<>
			{isShowModal && <CreateConversationModal setShow={setIsShowModal} />}
			<ConversationSidebarStyle>
				<header>
					<div className={styles.headerBody}>
						<h1>Conversations</h1>
						<div
							onClick={() => {
								setIsShowModal(!isShowModal);
							}}
						>
							<BsPencilSquare className={styles.icon} size={22} />
						</div>
					</div>
				</header>
				<div className={styles.contacts}>
					{conversations.map((conversation) => (
						<ConversationContactBlock
							onClick={() => {
								navigate(String(conversation.id));
							}}
							key={conversation.id}
						>
							<div className={styles.avatar}></div>
							<div className={styles.textBlock}>
								<h4 className={styles.contactName}>{conversation.name}</h4>
								<p className={styles.contactLastMessage}>{conversation.lastMessage}</p>
							</div>
						</ConversationContactBlock>
					))}
				</div>
			</ConversationSidebarStyle>
		</>
	);
};

export default ConversationSidebar;
