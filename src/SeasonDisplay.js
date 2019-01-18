import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Lets hit the beach!',
    iconName: 'sun'
    },
  winter: {
    text: 'Burr it is cold!',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = props => {


  seasonConfig[season];
  const season = getSeason(props.lat, new Date(). getMonth());
  return (
      <div className={`season-display ${season}`}>
      <h1>
        <i className = {`icon-left massive ${iconName} icon`} />
        {text}
        <i className = {`icon-right massive ${iconName} icon`} />
      </h1>
      </div>
    );
};

export default SeasonDisplay;
