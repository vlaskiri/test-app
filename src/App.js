import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/styles/app.css';
import ArticleGenerate from './components/ArticleGenerate';
import ArticleList from './components/ArticleList';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<BrowserRouter>
				<div className='app-wrapper'>
					<Navbar />
					<div className='app-wrapper__main-content'>
						<Routes>
							<Route path='/article' element={<ArticleList />} />
							<Route path='/article-random' element={<ArticleGenerate />} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
