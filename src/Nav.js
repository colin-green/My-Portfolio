import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function nav() {
	return (
		<nav>
			<h1>Colin Green</h1>
			<ul className='nav-links'>
				<Link to='/about'>
					<li>About</li>
				</Link>
				<Link to='/portfolio'>
					<li>Portfolio</li>
				</Link>
			</ul>
		</nav>
	);
}

export default nav;
