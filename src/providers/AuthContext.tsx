import { createContext } from 'react';
import { IUser } from '../types/user';

type IContext = {
	user?: IUser;
	updateAuthUser: (data: IUser) => void;
};

export const AuthContext = createContext<IContext>({
	updateAuthUser: () => {}
});

export const AuthProvider = () => {};
