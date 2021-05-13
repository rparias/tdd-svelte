import SingUpPage from './SignUpPage.svelte';
import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom';

describe('Sign Up Page', () => {
	describe('Layout', () => {
		it('has Sign Up header', () => {
			render(SingUpPage);
			const header = screen.getByRole('heading', { name: 'Sign Up' });
			expect(header).toBeInTheDocument();
		});

		it('has username input', () => {
			render(SingUpPage);
			const input = screen.getByLabelText('username');
			expect(input).toBeInTheDocument();
		});

		it('has email input', () => {
			render(SingUpPage);
			const input = screen.getByLabelText('Email');
			expect(input).toBeInTheDocument();
		});

		it('has password input', () => {
			render(SingUpPage);
			const input = screen.getByLabelText('Password');
			expect(input).toBeInTheDocument();
		});

		it('has password type for password input', () => {
			render(SingUpPage);
			const input = screen.getByLabelText('Password');
			expect(input.type).toBe('password');
		});

		it('has password repeat input', () => {
			render(SingUpPage);
			const input = screen.getByLabelText('Password Repeat');
			expect(input).toBeInTheDocument();
		});

		it('has password type for password input', () => {
			render(SingUpPage);
			const input = screen.getByLabelText('Password');
			expect(input.type).toBe('password');
		});

		it('has email input', () => {
			render(SingUpPage);
			const button = screen.getByRole('button', { name: 'Sign Up' });
			expect(button).toBeInTheDocument();
		});

		it('has Sign Up button disabled', () => {
			render(SingUpPage);
			const button = screen.getByRole('button', { name: 'Sign Up' });
			expect(button).toBeDisabled();
		});
	});
});
