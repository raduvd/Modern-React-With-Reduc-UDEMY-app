import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: "No Scrubs", duration: 4.5 },
        { title: "Macarena", duration: 2.5 },
        { title: "Parazitii", duration: 3.15 },
        { title: "BUG", duration: 2 }
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {

    if (action.type === "SONG_SELECTED") {
        return action.payload
    } else {
        return selectedSong
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});