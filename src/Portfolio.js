import React from 'react';
import projects from './projects.json';
import { Link } from 'react-router-dom';
import './App.css';

const portfolio = props => {
	return (
		<div>
			<h1>Portfolio</h1>
			{projects.map(project => (
				<p key={project.name}>
					<Link to={`/portfolio/${project.route}`}>{project.name}</Link>
				</p>
			))}
		</div>
	);
};

export default portfolio;
