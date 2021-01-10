import {React, useState} from 'react';
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

	const guessHandler = x => {
		setKeysGuessed(keysGuessed.concat(x));
	}

	return (
    	<div className="App">
			<p>{keysGuessed}</p>
			{
				alphabet.map(x => <Key disabled={keysGuessed.includes(x) ? true : false} index={x} guessHandler={guessHandler}>{x}</Key>)
			}
    	</div>
  	);
}

export default App;
