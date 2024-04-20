import { useState } from 'react';

import './App.css';
import Welcome from './components/Welcome';
import Game from './components/Game';
import Result from './components/Result';



function App() {

	const [currentScreen, setCurrentScreen] = useState();

	return (
		<>
			<Welcome />
			<Game />
			<Result />
		</>
	);
}

export default App;
