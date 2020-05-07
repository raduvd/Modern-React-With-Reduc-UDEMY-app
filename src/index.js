import React from 'react';
import ReactDOM from 'react-dom';

class extends React.Component {
    state = {};

    componentDidMount() {
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}


// Renders the App component into a div with id 'root'
ReactDOM.render(<Clock />, document.querySelector('#root'));