import React from 'react'
import ShelfChanger from './ShelfChanger'

function Book(props){
  const book = props.bookData;
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.coverUrl})` }}></div>
        <ShelfChanger />
      </div>
      <div className="book-title">{book.title}</div>
      {/*  TODO: create an authors component that lists all the authors */}
      <div className="book-authors">{book.authors[0]}</div>
    </div>
  )
}

export default Book
