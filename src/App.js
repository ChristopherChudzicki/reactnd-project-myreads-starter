import React from 'react'
import {Link, Route} from 'react-router-dom'
import SearchBooks from './SearchBooks'
import Bookshelf from "./Bookshelf"
import * as BooksAPI from './BooksAPI'
import './App.css'



class BooksApp extends React.Component {
  state = {
    books: []
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    this.loadBooks();
  }

  loadBooks = () => {
    BooksAPI.getAll().then( books => {
      this.setState({books:books})
    } )
  }

  componentDidMount() {
    this.loadBooks();
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={()=>{
          return (
            <SearchBooks />
          )
        }}/>
        <Route exact path="/" render={()=>{
          return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <Bookshelf
                  shelf="currentlyReading"
                  shelfTitle="Currently Reading"
                  books={this.state.books}
                  onChangeShelf = {this.changeShelf}
                />
                <Bookshelf
                  shelf="wantToRead"
                  shelfTitle="Want to Read"
                  books={this.state.books}
                  onChangeShelf = {this.changeShelf}
                />
                <Bookshelf
                  shelf="read"
                  shelfTitle="Read"
                  books={this.state.books}
                  onChangeShelf = {this.changeShelf}
                />
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )
        }}/>
      </div>
    )
  }
}

export default BooksApp
