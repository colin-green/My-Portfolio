import React from 'react';
import './App.css';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import ProfPic from './assets/images/profile-pic.jpg';
import { Link } from 'react-router-dom';

function about() {
	const jumbotronStlye = {
		backgroundColor: 'rgb(0, 48, 0)',
		border: '2px solid rgb(200, 255, 200)',
	};

	return (
		<Container
			style={{
				marginTop: '24px',
				height: '100vh',
			}}
		>
			<Jumbotron style={jumbotronStlye}>
				<h1 className='title' style={{ color: 'rgb(200, 255, 200)' }}>
					<u>About Me</u>
				</h1>
				<Row>
					<Col>
						<img className='profile-pic' src={ProfPic} />
					</Col>
					<Col>
						<p
							className='description'
							style={{ fontSize: '18px', color: 'rgb(200, 255, 200)' }}
						>
							Hey there! My name is Colin Green. I was born and raised in
							Central Florida, and I currently reside in Atlanta, Georgia. Ever
							since I was little, I have been enamored with video games,
							computers, and technology.
						</p>
						<p
							className='description'
							style={{ fontSize: '18px', color: 'rgb(200, 255, 200)' }}
						>
							Beginning around early 2006, I have been competing in tournaments
							around the country for my favorite video game: a fighting game for
							the Nintendo GameCube called Super Smash Bros. Melee. Since then,
							I've been recognized as one of the top 60 players in the world for
							7 years in a row now. I also enjoy spending time with my
							girlfriend, watching anime, and playing/
							<a
								href='https://en.wikipedia.org/wiki/Speedrun'
								target='_blank'
								rel='noopener noreferrer'
								className='about-link'
							>
								speedrunning
							</a>{' '}
							other video games.
						</p>
						<p
							className='description'
							style={{ fontSize: '18px', color: 'rgb(200, 255, 200)' }}
						>
							I graduated from a Full Stack Web Development Bootcamp at Georgia
							Tech. I have completed many assignments in which I had to create a
							functioning website with a certain goal in mind. I also have some
							group and individual projects under my belt as well. Feel free to
							check out my{' '}
							<Link to='/portfolio' className='about-link'>
								portfolio
							</Link>
							!
						</p>
					</Col>
				</Row>
			</Jumbotron>
		</Container>
	);
}

export default about;
