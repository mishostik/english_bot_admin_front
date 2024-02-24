import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/MainPage';
import Error from './components/ErrorPage';
import AuthPage from './components/AuthPage';
import Navigation from './components/Navigation';
import Task from './components/TaskPage';
import Rule from './components/RulePage';
import Module from './components/ModulePage';
import User from './components/UserPage';

const AppRouter = () => {
  return (
	<Router>
	<Navigation />
	<div>
	  <Routes>
	  <Route path="/" exact element={ <Main/>} />
        <Route path="/error" element={ <Error/>} />
		<Route path="/signin" element={ <AuthPage/>} />
		<Route path="/task" element={ <Task/>} />
		<Route path="/rule" element={ <Rule/>} />
		<Route path="/module" element={ <Module/>} />
		<Route path="/user" element={ <User/>} />
	  </Routes>
	</div>
  </Router>
  );
};

export default AppRouter;