import React from 'react'
import ShelfChanger from './ShelfChanger'
import PropTypes from 'prop-types'

function Book({book, onChangeShelf}){
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
        <ShelfChanger book={book} onChangeShelf = {onChangeShelf} />
      </div>
      <div className="book-title">{book.title}</div>
      {/*  TODO: create an authors component that nicely lists all the authors */}
      <div className="book-authors">{book.authors}</div>
    </div>
  )
}
Book.propTypes = {
  book: PropTypes.object.isRequired
}

export default Book
