import React from 'react';
import styles from './index.module.scss';
import {
	ChangeAuthText,
	InputContainer,
	InputField,
	InputLabel,
	MainTitle,
	SubmitBtn
} from '../../utils/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { LoginUserParams } from '../../types/userParams';
import { postLoginUser } from '../../utils/api';

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginUserParams>();
	const navigate = useNavigate();
	console.log(errors);

	const onSubmit = async (data: LoginUserParams) => {
		try {
			await postLoginUser(data);
			navigate('/conversation');
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<MainTitle>Login in a new Chat platform!</MainTitle>
			<InputContainer>
				<InputLabel htmlFor="email">Email</InputLabel>
				<InputField
					{...register('email', { required: 'Email is required' })}
					id="email"
					name="email"
					type="email"
					placeholder="Type here..."
				/>
			</InputContainer>
			<InputContainer>
				<InputLabel htmlFor="password">Password</InputLabel>
				<InputField
					{...register('password', { required: 'Password is required' })}
					id="password"
					name="password"
					type="password"
					placeholder="Type here..."
				/>
			</InputContainer>
			<SubmitBtn type="submit">Login</SubmitBtn>
			<ChangeAuthText>
				Don't have an account?{' '}
				<Link to="/">
					<span className={styles.link}>Register</span>
				</Link>{' '}
			</ChangeAuthText>
		</form>
	);
};

export default LoginForm;
