import React from 'react';
import { Row, Col } from 'react-bootstrap';

const footer = props => {
	return (
		<div>
			<div className='phantom' />
			<div className='footer'>
				<Row>
					<Col>
						<a
							href='https://docs.google.com/document/d/1FO21I7UTU2nKgpmlPU_7BGT9_iu-4GONOSUq3V_hLMQ/edit?usp=sharing'
							target='_blank'
							rel='noopener noreferrer'
							className='footer-link'
						>
							Résumé
						</a>
					</Col>
					<Col>
						<a
							href='https://www.linkedin.com/in/colinmgreen/'
							target='_blank'
							rel='noopener noreferrer'
							className='footer-link'
						>
							LinkedIn
						</a>
					</Col>
					<Col>
						<a
							href='mailto:colinmgreen7@gmail.com'
							rel='noopener noreferrer'
							className='footer-link'
						>
							colinmgreen7@gmail.com
						</a>
					</Col>
					<Col>(407) 463-9063</Col>
				</Row>
			</div>
		</div>
	);
};

export default footer;
