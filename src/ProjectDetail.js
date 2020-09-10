import React from 'react';
import projects from './projects.json';
import './App.css';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

const itemDetail = ({ match }, props) => {
	let thisProject;

	projects.forEach(project => {
		if (project.route === match.params.route && thisProject === undefined) {
			thisProject = project;
		}
	});

	const importAll = r => {
		let images = {};
		r.keys().map((item, index) => {
			images[item.replace('./', '')] = r(item);
		});
		return images;
	};

	const images = importAll(
		require.context('./assets/images', false, /\.(png|jpe?g|svg)$/)
	);

	const jumbotronStlye = {
		backgroundColor: 'rgb(0, 48, 0)',
		border: '2px solid rgb(200, 255, 200)',
	};

	return (
		<Container style={{ marginTop: '24px', height: '100vh' }}>
			<Jumbotron style={jumbotronStlye}>
				<h1 className='title'>
					<u>{thisProject.name}</u>
				</h1>
				<p className='description'>{thisProject.description}</p>
				<img className='project-img' src={images[thisProject.image]} />
				<Row>
					<Col>
						<a
							className='project-detail-link'
							target='_blank'
							rel='noopener noreferrer'
							href={thisProject.githubURL}
						>
							GitHub
						</a>
					</Col>
					{thisProject.deployed ? (
						<Col>
							<a
								className='project-detail-link'
								target='_blank'
								rel='noopener noreferrer'
								href={thisProject.deployedURL}
							>
								Deployed Site
							</a>
						</Col>
					) : null}
				</Row>
			</Jumbotron>
		</Container>
	);
};

export default itemDetail;
