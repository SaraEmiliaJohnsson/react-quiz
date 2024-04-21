import { useState } from 'react';

import './App.css';
import Welcome from './components/Welcome';
import Game from './components/Game';
import Result from './components/Result';

enum Screen {
	WELCOME = 'welcome',
	GAME = 'game',
	RESULT = 'result'
}

function App() {

	const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.WELCOME);

	let content: React.ReactElement | null = null

	switch (currentScreen) {
		case Screen.WELCOME:
			content = <Welcome nextScreen={() => setCurrentScreen(Screen.GAME)} />
			break;
		case Screen.GAME:
			content = <Game showResult={() => setCurrentScreen(Screen.RESULT)} />
			break;
		case Screen.RESULT:
			content = <Result />
			break;
		default:
			content = null;
	}

	return (
		<>
			{content}
		</>
	);
}

export default App;
