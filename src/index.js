import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/seach_bar';

// google api key
const API_KEY = 'AIzaSyAZo7WXm48b0oLeQJoxi503ITaX90EVFlY';

// create new component using jsx, this should produce HTML.
const App = () => {
    return <div>
        <SearchBar />
    </div>;
};

// take this component's generated HTML and put it on the page.
ReactDOM.render(<App />, document.querySelector('.container'));
