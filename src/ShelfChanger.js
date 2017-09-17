import React from 'react'
import PropTypes from 'prop-types'

function ShelfChanger({book, onChangeShelf}){
  return (
    <div className="book-shelf-changer">
      <select onChange={(event)=>{onChangeShelf(book, event.target.value)}} value={book.shelf}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

ShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default ShelfChanger
