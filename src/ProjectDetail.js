import React from 'react';
import projects from './projects.json';
import './App.css';

const itemDetail = ({ match }, props) => {
	let thisProject;

	projects.forEach(project => {
		if (project.route === match.params.route && thisProject === undefined) {
			thisProject = project;
		}
	});

	return (
		<div>
			<h1>
				<u>{thisProject.name}</u>
			</h1>
			<ul>
				{thisProject.deployed ? (
					<li>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href={thisProject.deployedURL}
						>
							Deployed URL
						</a>
					</li>
				) : null}
				<li>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href={thisProject.githubURL}
					>
						GitHub URL
					</a>
				</li>
			</ul>
		</div>
	);
};

export default itemDetail;
