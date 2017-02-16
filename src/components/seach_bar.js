import React, { Component } from 'react';

// Functional component
// const SearchBar = () => {
//     return <input placeholder="please enter your name..." />
// };

// Class base component
class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    render() {
        return (
            <div>
                <input onChange={this.onInputChange.bind(this)} placeholder="address" />
                Value: {this.state.term}
            </div>
        );
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }
}

export default SearchBar;