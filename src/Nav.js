import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function nav() {
	return (
		<nav>
			<Link className='my-name' to='/home'>
				<h1>Colin Green</h1>
			</Link>
			<ul className='nav-links'>
				<Link className='nav-link' to='/about'>
					<li>About Me</li>
				</Link>
				<Link className='nav-link' to='/portfolio'>
					<li>Portfolio</li>
				</Link>
			</ul>
		</nav>
	);
}

export default nav;
