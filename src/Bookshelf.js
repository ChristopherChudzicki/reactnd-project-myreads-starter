import React from 'react'
import Book from "./Book"
import PropTypes from 'prop-types'

function Bookshelf({shelfTitle, books}){
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map( (book, i) => (
            <li key={i}>
              <Book book={book}/>
            </li>
          ) )}
        </ol>
      </div>
    </div>
  )
}

Bookshelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
}

export default Bookshelf
