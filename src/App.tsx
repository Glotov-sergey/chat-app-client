import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ConversationPage from './pages/ConversationPage';
import ConversationChannelPage from './pages/ConversationChannelPage';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import { AuthContext } from './providers/AuthContext';
import { IUser } from './types/user';

function App() {
	const [user, setUser] = useState<IUser>();

	return (
		<AuthContext.Provider value={{ user, updateAuthUser: setUser }}>
			<Routes>
				<Route path="/" element={<RegisterPage />} />
				<Route path="login" element={<LoginPage />} />
				<Route
					path="conversation"
					element={
						<AuthenticatedRoute>
							<ConversationPage />
						</AuthenticatedRoute>
					}
				>
					<Route path=":id" element={<ConversationChannelPage />} />
				</Route>
			</Routes>
		</AuthContext.Provider>
	);
}

export default App;
