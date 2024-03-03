import React, { useState } from 'react';
import './Landing.css';
import SignUp from '../../components/signup/SignUp';
import netflixLogo from '../../img/netflix-logo.png';

function Landing() {
	const [signIn, setSignIn] = useState(false);
	return (
		<div className="landing">
			<div className="landing-background">
				<img className="landing-logo" onClick={() => setSignIn(false)} src={netflixLogo} alt="Landing logo" />
				<button onClick={() => setSignIn(true)} className="sign-in-button">Sign In</button>
				<div className="landing-gradient" />
			</div>
			<div className="landing-body">
				{signIn ? (
					<SignUp />
				) : (<>
					<h1>Unlimited movies, TV shows, and more</h1>
					<h2>Watch anywhere. Cancel anytime.</h2>
					<h3>Ready to watch? Enter your email to create or restart your membership.</h3>
					<div className="landing-input">
						<form>
							<input type="email" placeholder="Email address" />
							<button onClick={() => setSignIn(true)} className="landing-get-started-button">Get Started</button>
						</form>
					</div>
				</>)}
			</div>
		</div>
	);
}

export default Landing;