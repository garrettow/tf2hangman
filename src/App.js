import {React, useState, useEffect} from 'react';
import './App.sass';
import Key from './Components/Key';

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const words = {
	maps: {
		payload: ['Badwater', 'Upward', 'Swiftwater', 'Goldrush']
	}
}

const App = () => {

	const [keysGuessed, setKeysGuessed] = useState([]);
	const [currentWord, setCurrentWord] = useState('test');
	const [guessCount, setGuessCount] = useState(5);

	const load = () => {
		setKeysGuessed([]);
		setGuessCount(5);
		setCurrentWord(words.maps.payload[Math.floor(Math.random() * (words.maps.payload.length))])
	}

	const guessHandler = x => {
		setGuessCount(guessCount - 1);
		setKeysGuessed(keysGuessed.concat(x));
	}

	useEffect(() => {
		load();
	}, [])

	return (
    	<div className="App">
			{
				alphabet.map(x => <Key disabled={keysGuessed.includes(x) ? true : false} index={x} guessHandler={guessHandler}>{x}</Key>)
			}
			<p>{guessCount} Guesses remaining!</p>
			<p>{keysGuessed}</p>
			<p>Current Word: {currentWord}</p>
			<button onClick={() => load()}>New Word</button>
    	</div>
  	);
}

export default App;
