import React from 'react';
import './App.css';
import About from './About';
import Portfolio from './Portfolio';
import Nav from './Nav';
import ProjectDetail from './ProjectDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Nav />
				<Switch>
					<Route path={['/', '/about', '/home']} exact component={About} />
					<Route path='/portfolio' exact component={Portfolio} />
					<Route path='/portfolio/:route' component={ProjectDetail} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
