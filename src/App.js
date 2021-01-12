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

	const [wins, setWins] = useState(0);
	const [loss, setLoss] = useState(0);
	const [correctKeys, setCorrectKeys] = useState([]);
	const [keysGuessed, setKeysGuessed] = useState([]);
	const [currentWord, setCurrentWord] = useState('');
	const [guessCount, setGuessCount] = useState(5);

	const load = () => {
		setKeysGuessed([]);
		setGuessCount(5);
		setCorrectKeys([]);
		setCurrentWord(words.maps.payload[Math.floor(Math.random() * (words.maps.payload.length))])
	}

	const resetScore = () => {
		setWins(0);
		setLoss(0);
		load();
	}

	const checkIfWin = arr => {

		let curr = currentWord.toLowerCase().split('');

		if(curr.every(currentValue => arr.includes(currentValue))) {
			return true;
		} else {
			return false;
		}

	}

	const guessHandler = x => {

		if(currentWord.includes(x) || currentWord.includes(x.toUpperCase())) {
			setKeysGuessed(keysGuessed.concat(x));

			let curr = correctKeys;

			if(checkIfWin(curr.concat(x))) {
				console.log('you won');
				setWins(wins + 1);
				load();
			} else {
				console.log('Not Over!');
				setCorrectKeys(correctKeys.concat(x));
			}

		} else {
			if(guessCount > 0) {
				setGuessCount(guessCount - 1);
				setKeysGuessed(keysGuessed.concat(x));
			} else {
				setLoss(loss + 1);
				load();
			} 
		}
	}

	useEffect(() => {
		load();
	}, []);

	return (
    	<div className="App">
			{
				alphabet.map(x => <Key disabled={keysGuessed.includes(x) ? true : false} index={x} guessHandler={guessHandler}>{x}</Key>)
			}
			<p>{guessCount} Wrong guesses remaining!</p>
			<p>Current Score: Wins: {wins} Loss: {loss}</p>
			<p>{keysGuessed}</p>
			<p>Current Word: {currentWord}</p>
			<p>{currentWord.split(' ').map(x => <span className="word">{x.split('').map(l => <span className="letter">{(keysGuessed.includes(l.toLowerCase())) ? l : '_'}</span>)}</span>)}</p>
			<button onClick={() => load()}>New Word</button>
			<button onClick={resetScore}>Reset Score</button>
    	</div>
  	);
}

export default App;
