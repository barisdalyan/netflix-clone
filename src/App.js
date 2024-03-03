import React, { useEffect } from 'react';
import './App.css';
import Landing from './pages/landing/Landing';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(login({
					uid: userAuth.uid,
					email: userAuth.email
				}));
			} else {
				dispatch(logout());
			}
		});
		return unsubscribe;
	}, [dispatch]);

	return (
		<div className="app">
			<Router>
				{!user ? (
					<Landing />
				) : (
					<Routes>
						<Route path="/profile" element={<Profile />} />
						<Route exact path="/" element={<Home />} />
					</Routes>
				)}
			</Router>
		</div>
	);
}

export default App;