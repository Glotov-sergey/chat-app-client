import { CreateUserParams, LoginUserParams } from '../types/userParams';
import axios, { AxiosRequestConfig } from 'axios';
import { IUser } from '../types/user';

const API_URL = process.env.REACT_APP_API_URL;

const config: AxiosRequestConfig = { withCredentials: true };

export const postRegisterUser = (data: CreateUserParams) =>
	axios.post(`${API_URL}/auth/register`, data, config);

export const postLoginUser = (data: LoginUserParams) =>
	axios.post(`${API_URL}/auth/login`, data, config);

export const getAuthUser = () =>
	axios.get<IUser>(`${API_URL}/auth/status`, config);
