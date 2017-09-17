import React from 'react'
import ShelfChanger from './ShelfChanger'
import PropTypes from 'prop-types'

function Book({book}){
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
Book.propTypes = {
  book: PropTypes.object.isRequired
}

export default Book
