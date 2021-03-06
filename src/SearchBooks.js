import React, {Component} from 'react'
import Book from "./Book"
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class SearchBooks extends Component {

  static propTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    getShelfMap: PropTypes.func.isRequired
  }

  state = {
    searchResults: []
  }

  searchTerms = [ "android", "art", "artificial intelligence", "astronomy", "austen", "baseball", "basketball", "bhagat", "biography", "brief", "business", "camus", "cervantes", "christie", "classics", "comics", "cook", "cricket", "cycling", "desai", "design", "development", "digital marketing", "drama", "drawing", "dumas", "education", "everything", "fantasy", "film", "finance", "first", "fitness", "football", "future", "games", "gandhi", "homer", "horror", "hugo", "ibsen", "journey", "kafka", "king", "lahiri", "larsson", "learn", "literary fiction", "make", "manage", "marquez", "money", "mystery", "negotiate", "painting", "philosophy", "photography", "poetry", "production", "programming", "react", "redux", "river", "robotics", "rowling", "satire", "science fiction", "shakespeare", "singh", "swimming", "tale", "thrun", "time", "tolstoy", "travel", "ultimate", "virtual reality", "web development", "ios"
  ]

  searchBooks = (term) => {
    const maxResults = 20;
    term = term.toLowerCase();
    if (this.searchTerms.includes(term)){
      const shelfMap = this.props.getShelfMap();
      BooksAPI.search(term, maxResults).then( results => {
        this.setState({searchResults: results.map(r => {
          r.shelf = shelfMap[r.id]
          return r
        })})
      } )
    }
  }

  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              onChange={ event => this.searchBooks(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResults.map( (book, i) => (
              <li key={i}>
                <Book book={book} onChangeShelf={this.props.onChangeShelf}/>
              </li>
            ) )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
