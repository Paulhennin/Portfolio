import React from 'react';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';
import './style.scss';

export default function Porfolio() {
  return (
    <div className="container">
      <h1> Portfolio</h1>
      <section className="container__lang">
          <h2>Ruby / RoR</h2>
        <div className="container__lang-cards">
          <article className="card">
            <Iframe url="http://mangahiro.herokuapp.com/mangahiro" style="background-color: transparent;" className="iframe__img" width="100%" height="100%" />
            <div className="card-content">
              <h2 className="card-title">Mangahiro</h2>
              <p className="card-desc">Site de critiques Manga</p>
              <a
                className="card-link"
                href="http://mangahiro.herokuapp.com/mangahiro"
              >
                Voir le site
              </a>
            </div>
          </article>
          <article className="card">
            <Iframe url="http://ungardienpresdechezsoi.herokuapp.com/" style="background-color: transparent;" className="iframe__img" width="100%" height="100%" />
            <div className="card-content">
              <h2 className="card-title">Un gardien près de chez soi</h2>
              <p className="card-desc">Site de petSitting</p>
              <a
                className="card-link"
                url="http://ungardienpresdechezsoi.herokuapp.com/"
              >
                Voir le site
              </a>
            </div>
          </article>
        </div>
        <h2>JS / ReactJS</h2>
        <div className="container__lang-cards">
          <article className="card">
            <div className="card-content">
              <h2 className="card-title">Mangahiro</h2>
              <p className="card-desc">Site de critiques Manga</p>
              <a
                className="card-link"
                href="http://mangahiro.herokuapp.com/mangahiro"
              >
                Voir le site
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
);
}

Porfolio.propTypes = {

};
