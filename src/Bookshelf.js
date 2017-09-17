import React from 'react'
import Book from "./Book"

function Bookshelf({shelf}){
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelf.books.map( (book, i) => (
            <li key={i}>
              <Book bookData={book}/>
            </li>
          ) )}
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf
