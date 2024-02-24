// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
        	<Link to="/">Main</Link>
        </li>
        <li>
        	<Link to="/error">Error</Link>
        </li>
		<li>
			<Link to="/signin">Sign In</Link>
        </li>
		<li>
        	<Link to="/module">Module</Link>
        </li>
		<li>
			<Link to="/task">Task</Link>
        </li>
		<li>
        	<Link to="/rule">Rule</Link>
        </li>
		<li>
			<Link to="/user">User</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
