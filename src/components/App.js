import React from 'react';
import SearchBar from './SearchBar';
import unsplash from "./../api/unsplash.js";
import ImageList from './ImageList';


class App extends React.Component {
    state = { images: [] }

    componentDidMount() {
        const divElement = document.getElementById('rad');
        console.log(divElement);
        divElement.addEventListener("load", () => console.log("element is loaded"));
    }
    onSearchSubmit = async (term) => {
        const response = await unsplash.get("/search/photos", {
            params: { query: term }
        })

        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div id="rad" className="ui containter" style={{ marginTop: '10px' }}>
                <SearchBar onSubmitProp={this.onSearchSubmit} />
                <ImageList images={this.state.images}>
                </ImageList>
            </div >
        );
    }
}

export default App;