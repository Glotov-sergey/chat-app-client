import React, { FC } from 'react';
import {
	ChangeAuthText,
	InputContainer,
	InputField,
	InputLabel,
	MainTitle,
	SubmitBtn
} from '../../utils/styles';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const RegisterForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	console.log(errors);
	const onSubmit = (data: any) => {
		console.log('213');
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<MainTitle>Welcome to a new Chat platform!</MainTitle>
			<InputContainer>
				<InputLabel htmlFor="email">Email</InputLabel>
				<InputField
					id="email"
					type="email"
					placeholder="Type here..."
					{...register('email', { required: 'Email is required' })}
				/>
			</InputContainer>
			<section className={styles.credentialsField}>
				<InputContainer>
					<InputLabel htmlFor="firstName">First name</InputLabel>
					<InputField
						id="firstName"
						type="text"
						placeholder="Type here..."
						{...register('firstName', { required: 'Firstname is required' })}
					/>
				</InputContainer>
				<InputContainer>
					<InputLabel htmlFor="lastName">Last Name</InputLabel>
					<InputField
						id="lastName"
						type="text"
						placeholder="Type here..."
						{...register('lastName', { required: 'Lastname is required' })}
					/>
				</InputContainer>
			</section>
			<InputContainer>
				<InputLabel htmlFor="password">Password</InputLabel>
				<InputField
					id="password"
					type="password"
					placeholder="Type here..."
					{...register('password', { required: 'Password is required' })}
				/>
			</InputContainer>
			<SubmitBtn type="submit">Create Account</SubmitBtn>
			<ChangeAuthText>
				Already have account?{' '}
				<Link to="/login">
					<span className={styles.link}>Login</span>
				</Link>{' '}
			</ChangeAuthText>
		</form>
	);
};

export default RegisterForm;
