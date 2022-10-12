import React, { FC, useContext } from 'react';
import { AuthContext } from '../providers/AuthContext';
import { ConversationChannelPageStyle } from '../utils/styles';

const ConversationChannelPage: FC = () => {
	const { user } = useContext(AuthContext);
	return (
		<ConversationChannelPageStyle>
			{user && user.id} <br />
			{user && user.firstName} <br />
			{user && user.lastName} <br />
		</ConversationChannelPageStyle>
	);
};

export default ConversationChannelPage;
