import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function BackgroundLine() {
  return (
    <div className="lines">
      <div className="line">
        <div className="clip-me2" />
      </div>
      <div className="line" />
      <div className="line">
        <div className="clip-me1" />
      </div>
      <div className="line" />
      <div className="line" />
      <div className="line">
        <div className="clip-me3" />
      </div>
      <div className="line" />
    </div>
  );
}

BackgroundLine.propTypes = {

};
