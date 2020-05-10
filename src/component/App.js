import React from "react";
import SearchBar from "./SearchBar"
import youtube from "./../api/Youtube"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"

const KEY = "AIzaSyB2ppHfp5LmBEXH5aIKjTeTsV5xC1GO4dc";

class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    onTermSubmit = async (term) => {
        console.log(term)
        const response = await youtube.get("/search", {
            params: {
                maxResults: 5,
                type: "video",
                key: KEY,
                part: "snippet",
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }
    onVideoSelect = (videoObject) => {
        this.setState({ selectedVideo: videoObject });
    }


    componentDidMount() {

        this.onTermSubmit("buildings");
    }

    render() {
        return (
            < div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="nine wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>

                    </div>
                </div>
            </div >
        );
    }

}

export default App;
