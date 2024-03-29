import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
	return (
		<nav className='app-wrapper__nav-content'>
			<div>
				<NavLink to='/test-app/article'>Article</NavLink>
			</div>

			<div>
				<NavLink to='/test-app/article-random'>ArticleGenerate</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
