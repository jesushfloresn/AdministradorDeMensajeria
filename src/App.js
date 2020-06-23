import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './pages/404/NotFound';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
};

export default App;
