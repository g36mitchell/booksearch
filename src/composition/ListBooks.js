import React, { Component } from 'react';
import './ListBooks.css';
import Book from './Book.js';

class ListBooks extends Component {



    render() {

        if (this.props.newSearch) {
            const booklist = this.props.booklist.map(book =>
                <Book book={book} key={book.id}/> );

            return(
                <div className='book__list'>
                     {booklist}
                </div>
            );
       }
       else {
           return(
               <>
               </>
           );
       }
    }
}

export default ListBooks;