import React, { FC, PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

const AuthenticatedRoute: FC<PropsWithChildren> = ({ children }) => {
	const location = useLocation();
	const { isLoading, user } = useAuth();
	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (user) return <>{children}</>;
	return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AuthenticatedRoute;
