import React from 'react';
import "./seasonsDisplay.css";

function getSeasons(geolocation, currentMonth) {
    if (currentMonth > 2 && currentMonth < 9) {
        return geolocation > 0 ? "Summer" : "Winter"
    } else {
        return geolocation > 0 ? "Winter" : "Summer"
    }
}

const Seasons = (props) => {
    let seasons = getSeasons(props.geolocation, new Date().getMonth());
    const icon = seasons === 'Winter' ? "snowflake" : "sun";
    return (
        <div className={`season-display ${seasons}`}>
            <i className={`iconLeft massive ${icon} icon`} />
            <h1>{seasons === 'Winter' ? "Brr, is chilly!" : "Wow is hot!"}</h1>
            <i className={`iconRight massive ${icon} icon`} />
        </div>
    );
}

export default Seasons;