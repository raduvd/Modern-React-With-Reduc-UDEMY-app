import React from 'react';
import ReactDOM from 'react-dom';
import Seasons from './Seasons';
import Spinner from './Spinner';


class App extends React.Component {

    constructor() {
        super();
        this.state = { geolocation: null, errorMessage: null }
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => { this.setState({ geolocation: position.coords.latitude }) },
            (error) => { this.setState({ errorMessage: error.message }) })
    }

    renderContents() {
        if (this.state.errorMessage && !this.state.geolocation) {
            return <div> Error: {this.state.errorMessage}</div >;
        }
        if (!this.state.errorMessage && this.state.geolocation) {
            return <Seasons geolocation={this.state.geolocation} />;
        }
        return <Spinner />;
    }

    render() {
        return (
            <div>
                {this.renderContents()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"))

