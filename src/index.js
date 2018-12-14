import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz.js';
import { shuffle, sample } from 'underscore';
import * as serviceWorker from './serviceWorker';

const authors = [
	{
		name: 'Stephen King',
		imageUrl: `${process.env.PUBLIC_URL}/authors/stephenking.jpg`,
		imageSource: 'Wikimedia Common',
		books: [
			'The Shining',
		]
	},
	{
		name: 'J.K. Rowling',
		imageUrl: `${process.env.PUBLIC_URL}/authors/jkrowling.jpg`,
		imageSource: 'Wikimedia Common',
		books: [
			'Harry Potter and the Sorcerers Stone',
		]
	},
	{
		name: 'Mark Twain',
		imageUrl: `${process.env.PUBLIC_URL}/authors/marktwain.jpg`,
		imageSource: 'Wikimedia Common',
		books: [
			'The Adventures of Huckleberry Finn',
		]
	},
	{
		name: 'Ernest Cline',
		imageUrl: `${process.env.PUBLIC_URL}/authors/ernestcline.jpg`,
		imageSource: 'Wikimedia Common',
		books: [
			'Ready Player One',
		]
	}
]

function getTurnData(authors) {
	const allBooks = authors.reduce((p, c, i) => {
		return p.concat(c.books);
	}, []);
	const fourRandomBooks = shuffle(allBooks).slice(0, 4);
	const answer = sample(fourRandomBooks);

	return {
		books: fourRandomBooks,
		author: authors.find((authors) => authors.books.some((title) => title === answer))
	}
}

const state = {
	turnData: getTurnData(authors)
}

ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
