import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../providers/AuthContext';
import { getAuthUser } from '../utils/api';

export const useAuth = () => {
	const { user, updateAuthUser } = useContext(AuthContext);
	const [isLoading, setIsLoading] = useState(true);
	const controller = new AbortController();
	useEffect(() => {
		getAuthUser()
			.then(({ data }) => {
				updateAuthUser(data);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				console.log(err);
			});

		return () => {
			controller.abort();
		};
	}, []);

	return { user, isLoading };
};
