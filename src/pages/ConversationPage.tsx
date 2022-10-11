import React, { FC } from 'react';
import ConversationSidebar from '../components/conversations/ConversationSidebar';
import ConversationPanel from '../components/conversations/ConversationPanel';
import { Outlet, useParams } from 'react-router-dom';
import { conversations } from '../utils/__mocks__/conversations';

const ConversationPage: FC = () => {
	const { id } = useParams();
	return (
		<>
			<ConversationSidebar conversations={conversations} />
			{!id && <ConversationPanel />}
			<Outlet />
		</>
	);
};

export default ConversationPage;
