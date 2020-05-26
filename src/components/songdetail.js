import React from 'react';
import { connect } from 'react-redux';


const SongDetail = ({ song }) => {
    if (!song) {
        return (
            <div>Select a song</div>
        )
    }
    return (
        <div>
            <h3>Details For: </h3>
            <p>
                Title: {song.title}
                <br />
                Duration {song.duration}
            </p>
        </div>
    )
}

const mapStoreToProps = (store) => {
    return { song: store.selectedSong }
}

export default connect(mapStoreToProps)(SongDetail);