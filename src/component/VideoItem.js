import React from "react";
import "./videoItem.css"


const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="item video-item" onClick={() => { onVideoSelect(video) }}>
            <img className="ui image" alt="not laoding.." src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="headers">{video.snippet.title}</div>
            </div>
        </div>
    );
}



export default VideoItem