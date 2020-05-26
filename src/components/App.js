import React from 'react';
import Songs from './songs'
import SongDetail from './songdetail'

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <Songs />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
}

export default App;