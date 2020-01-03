import React from 'react';
import './App.css';
import SearchBooks from './composition/SearchBooks.js';
import ListBooks from './composition/ListBooks.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newSearch: false,
      error: null,
      booklist: [],
    }
  }

  performSearch(searchOptions) {

    if (searchOptions.newSearch) {

        const BASE_URL = "https://www.googleapis.com/books/v1/volumes";
        const API_KEY  = "AIzaSyCsCiqm4W7-QWwkWAj54QuclNCAz3XWaoQ";

        const options =  {
            q: encodeURIComponent(searchOptions.query),
            filter: searchOptions.filter,
            printType: searchOptions.printType,
            key: API_KEY,
        };

        let queryString = Object.keys(options)
                          .map(key => (options[key]) ? `${key}=${options[key]}` : null)
                          .filter(Boolean)
                          .join('&');

        const url = `${BASE_URL}?${queryString}`;

        console.log(url);

        fetch(url)
          .then(response => {
               if (response.ok) {
                   return response.json();
               }
               throw new Error(response.statusText);
          })
          .then(responseJson => {
                console.log('Tell me what was returned');
                console.log(responseJson.items);
                this.setState({
                  newSearch: true,
                  booklist: responseJson.items,
                  error: null
                })
          })
          .catch(err => {
            this.setState({
              newSearch: false,
              error: err.message,
            });
          });
    }
  }

  render() {

    /* conditional rendering */
    let error = (this.state.error) ? <div className='react__error'>{this.state.error}</div> : '';
    let listBooks = (this.state.booklist) 
                    ? <ListBooks booklist={this.state.booklist} newSearch={this.state.newSearch} />
                    : (this.state.newSearch)
                      ? <div className='react__no_results'>No results</div>
                      : null;
    return (
      <div className="App">
        <header className="app__header">
          <h1>Google Book Search</h1>
        </header>
        <SearchBooks handleSearch={searchOptions => this.performSearch(searchOptions)}  />
        {error}
        {listBooks}
      </div>
    );
  }
}

export default App;
