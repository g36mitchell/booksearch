import React, { Component } from 'react';
import './SearchBooks.css';

class SearchBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newSearch: false,
            query: null,
            printType: null,  /* all, books, magazines */
            filter: null,  /* partial, full, free-ebooks, paid-ebooks, ebooks */
        };
    }

    updateQuery(value) {
        this.setState({
            newSearch: true,
            query: value,
        });
    }

    updatePrinttype(value) {
        this.setState({
            newSearch: true,
            printType: value,
        });
    }

    updateBooktype(value) {
        this.setState({
            newSearch: true,
            filter: value,
        });
    }

    prepareOptions(event) {

        event.preventDefault();

        const { newSearch, query, printType, filter } = this.state;

        const searchOptions =  { newSearch, query, printType, filter };

        this.props.handleSearch(searchOptions);
    }


    render() {

        return(
            <div>
                <div className='search__form'>
                    <form>
                        <input 
                            type='text' 
                            name='searchQuery'
                            id='searchQuery'
                            className='search_query_input'
                            placeholder='World War II'
                            required 
                            onChange={e => this.updateQuery(e.target.value)} />
                        <button 
                            type='Submit'
                            className='react-primary-button'
                            onClick={e => this.prepareOptions(e)}>Search</button>
                    </form>
                </div>
                <div className='filter__form'>
                    <div className='filter__printtype'>
                        <label>Print type: </label>
                        <select onChange={e => this.updatePrinttype(e.target.value)}>
                            <option value='all'>All</option>
                            <option value='books'>Books</option>
                            <option value='magazines'>Magazines</option>
                        </select>
                    </div>
                    <div className='filter__booktype'>
                        <label>Book type: </label>
                        <select onChange={e => this.updateBooktype(e.target.value)}>
                            <option value='partial'>Full or Partial text</option>
                            <option value='full'>Full text only</option>
                            <option value='ebooks'>Available as Ebook</option>
                            <option value='free-ebooks'>Available as Free Ebook</option>
                            <option value='paid-ebooks'>Available as Paid Ebook</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBooks;