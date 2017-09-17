import React from 'react'
import Book from "./Book"
import PropTypes from 'prop-types'

function Bookshelf({shelf, shelfTitle, books, onChangeShelf}){
  books = books.filter( book => book.shelf===shelf )
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map( (book, i) => (
            <li key={i}>
              <Book book={book} onChangeShelf={onChangeShelf}/>
            </li>
          ) )}
        </ol>
      </div>
    </div>
  )
}

Bookshelf.propTypes = {
  shelf: PropTypes.string.isRequired,
  shelfTitle: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Bookshelf
