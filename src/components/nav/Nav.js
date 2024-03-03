import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';
import netflixLogo from '../../img/netflix-logo.png';
import netflixAvatar from '../../img/netflix-avatar.png';

function Nav() {
	const [show, handleShow] = useState(false);
	const navigate = useNavigate();

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', transitionNavBar);
		return () => window.removeEventListener('scroll', transitionNavBar);
	}, []);

	return (
		<div className={`nav ${show && 'nav-black'}`}>
			<div className="nav-contents">
				<img className="nav-logo" onClick={() => navigate('/')}
					src={netflixLogo} alt="Netflix logo" />
				<img className="nav-avatar" onClick={() => navigate('/profile')}
					src={netflixAvatar} alt="User avatar" />
			</div>
		</div>
	);
}

export default Nav;