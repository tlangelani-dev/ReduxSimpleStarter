import React from 'react';
import ReactDOM from 'react-dom';

// create new component using jsx, this should produce HTML.
const App = () => {
    return <div>Hello</div>;
};

// take this component's generated HTML and put it on the page.
ReactDOM.render(<App />, document.querySelector('.container'));
