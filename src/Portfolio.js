import React from 'react';
import projects from './projects.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import './App.css';

const portfolio = props => {
	const jumbotronStlye = {
		backgroundColor: 'rgb(0, 48, 0)',
		border: '2px solid rgb(200, 255, 200)',
		fontFamily: "'Gayathri', sans-serif",
	};

	return (
		<Container style={{ marginTop: '24px', height: '100vh' }}>
			<Jumbotron style={jumbotronStlye}>
				<h1 className='title'>
					<u>Portfolio</u>
				</h1>
				<Row>
					<Col style={{ color: 'rgb(200, 255, 200)' }}>
						<h3 style={{ justifyContent: 'center' }}>
							<u>Proficiencies:</u>
						</h3>
						<ul
							style={{
								listStyle: 'none',
								marginRight: '32px',
								fontSize: '22px',
							}}
						>
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
							<li>jQuery</li>
							<li>GIT</li>
							<li>Node.js</li>
							<li>Express.js</li>
							<li>MySQL</li>
							<li>MongoDB</li>
							<li>React.js</li>
							<li>Python</li>
						</ul>
					</Col>
					<Col>
						<h3 style={{ color: 'rgb(200, 255, 200)' }}>
							<u>Projects:</u>
						</h3>
						{projects.map(project => (
							<p key={project.name} className='project-link'>
								<Link
									to={`/portfolio/${project.route}`}
									style={{ color: 'rgb(100, 255, 100)' }}
								>
									{project.name}
								</Link>
							</p>
						))}
					</Col>
				</Row>
			</Jumbotron>
		</Container>
	);
};

export default portfolio;
