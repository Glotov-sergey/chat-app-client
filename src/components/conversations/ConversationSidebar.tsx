import React, { FC } from 'react';
import {
	ConversationContactBlock,
	ConversationSidebarStyle
} from '../../utils/styles';
import { BsPencilSquare } from 'react-icons/bs';
import styles from './index.module.scss';

import { IConversation } from '../../types/conversation';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
	conversations: IConversation[];
}

const ConversationSidebar: FC<SidebarProps> = ({ conversations }) => {
	const navigate = useNavigate();

	return (
		<ConversationSidebarStyle>
			<header>
				<div className={styles.headerBody}>
					<h1>Conversations</h1>
					<BsPencilSquare className={styles.icon} size={22} />
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
	);
};

export default ConversationSidebar;
