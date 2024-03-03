import React, { useRef } from 'react';
import './SignUp.css';
import { auth, createUserWithEmailAndPassword } from '../../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function SignUp() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const register = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(
			auth,
			emailRef.current.value,
			passwordRef.current.value
		).then((authUser) => {
			console.log(authUser);
		}).catch((error) => alert(error.message));
	};

	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(
			auth,
			emailRef.current.value,
			passwordRef.current.value
		).then((authUser) => {
			console.log(authUser);
		}).catch((error) => alert(error.message));
	};

	return (
		<div className="sign-up">
			<form>
				<h1>Sign In</h1>
				<input ref={emailRef} type="email" placeholder="Email or phone number" />
				<input ref={passwordRef} type="password" placeholder="Password" />
				<button type="submit" onClick={signIn}>Sign In</button>
				<h4>
					<span className="sign-up-gray">New to Netflix? </span>
					<span className="sign-up-link" onClick={register}>Sign up now.</span>
				</h4>
			</form>
		</div>
	);
}

export default SignUp;