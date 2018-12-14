import React, { Component } from 'react';
import './AuthorQuiz.css';
import './bootstrap.css'

function Book({title}) {
  return (
    <div className='answer'>
      <h4>{title}</h4>
    </div>
  );
}

function Hero(props) {
  return (<div className='row'>
      <div className='jumbotron col-10 offset-1'>
        <h1>Author Quiz</h1>
        <p>Select the book writter by the author shown</p>
      </div>
    </div>)
}

function Turn({author, books}) {
  return (
    <div className='row turn' style={{backgroundCoolor: "white"}}>
      <div className='col-4 offset-1'>
        <img src={author.imageUrl} className='authorimage' alt='author' />
      </div>
      <div className='col-6'>
        {books.map((title) => <Book title={title} key={title} />)}
      </div>
    </div>
  )
}

function Continue(props) {
  return (<div></div>)  
}

function Footer(props) {
  return (<div id='footer' className='row'>
    <div className='col-12'>
      <p className='text-muted credit'>All images are from</p>
    </div>
  </div>)
}

function AuthorQuiz({turnData}) {
    return (
      <div className='container-fluid'>
        <Hero />
        <Turn {...turnData} />
        <Continue />
        <Footer />
      </div>
    );
}

export default AuthorQuiz;
