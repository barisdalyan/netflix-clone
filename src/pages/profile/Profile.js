import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import Nav from '../../components/nav/Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../utils/firebase';
import netflixAvatar from '../../img/netflix-avatar.png';

function Profile() {
	const user = useSelector(selectUser);
	const navigate = useNavigate();

	const signOut = async () => {
		await auth.signOut();
		navigate('/');
	};

	return (
		<div className="profile">
			<Nav />
			<div className="profile-body">
				<h1>Edit Profile</h1>
				<div className="profile-info">
					<img src={netflixAvatar} alt="User avatar" />
					<div className="profile-details">
						<h2>{user.email}</h2>
						<button className="profile-sign-out" onClick={signOut}>Sign Out</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;