import React from 'react';

const Spinner = (props) => {
  return (
    <div class = 'ui active dimmer'>
      <div className = "ui big text loader">
        Loading...
      </div>
    </div>
  );
};

export default Spinner.js;
