import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleGenerate from './components/ArticleGenerate';
import Navbar from './components/Navbar';
import '../src/styles/app.css';

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
