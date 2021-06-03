import React from 'react';
import PropTypes from 'prop-types';
import copyright from './copyright.png';
import './style.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <img src={copyright} alt="copyright logo" className="copyright" />
      <div>
        Copyright all rights reserved
      </div>
    </footer>
);
}

Footer.propTypes = {

};
