import React from 'react';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';
import './style.scss';
import PlayrFindR from 'src/assets/playrfindr.png'
import mangahiro from 'src/assets/mangahiro.PNG'
import orgatravel from 'src/assets/orgatravel.png'
import LogoGardien from 'src/assets/LogoGardien.png'
import TitreGardien from 'src/assets/TitreGardienNoir.png'

export default function Porfolio() {
  return (
    // http://ph-calc.surge.sh
    <div className="container">
      <h1> Portfolio</h1>
      <section className="container__lang">
        <h2 className="react">JS / ReactJS</h2>
        <div className="container__lang-cards react">
          <article className="card react">
            <div className="card-content">
              <img src={PlayrFindR} alt="logo site PlayrFindr" />
              <h2 className="card-title react">PlayrFindR</h2>
              <p className="card-desc">Site de mise en relation de particulier à particulier pour un instant BoardGaming</p>
              <div className="card-link-deck">
                <a
                  className="card-link"
                  href="http://playrfindr.surge.sh"
                >
                  Site
                </a>
                <a
                  className="card-link"
                  href="https://github.com/Paulhennin/PlayrFindr"
                >
                  Github
                </a>
              </div>
            </div>
          </article>
          <article className="card react">
            <div className="card-content">
            <img src={orgatravel} alt="logo site OrgaTravel" className="project_logo"/>
              <h2 className="card-title react">OrgaTravel</h2>
              <p className="card-desc">Une API qui arrivera bientôt, stay tuned !</p>
              <div className="card-link-deck">
                <a
                  className="card-link no-pointer"
                  href="#"
                >
                  Site
                </a>
                <a
                  className="card-link no-pointer"
                  href="#"
                >
                  Github
                </a>
              </div>
            </div>
          </article>
          <article className="card react">
            <div className="card-content">
              <h2 className="card-title react">SimpleCalc</h2>
              <p className="card-desc">Une calculatrice qui réalise les opérations simple d'addition, soustraction, division, multiplication</p>
              <div className="card-link-deck">
                <a
                  className="card-link"
                  href="http://ph-calc.surge.sh"
                >
                  Site
                </a>
                <a
                  className="card-link"
                  href="https://github.com/Paulhennin/CalculatriceSimple"
                >
                  Github
                </a>
              </div>
            </div>
          </article>
          <article className="card react">
            <div className="card-content">
              <h2 className="card-title react">Loaders</h2>
              <p className="card-desc">Petit site regroupant des loaders codé en CSS sur une api React</p>
              <div className="card-link-deck">
                <a
                  className="card-link rect"
                  href="http://ph-loaders.surge.sh"
                >
                  Site
                </a>
                <a
                  className="card-link react"
                  href="https://github.com/Paulhennin/Loaders"
                >
                  Github
                </a>
              </div>
            </div>
          </article>
          <article className="card react">
            <div className="card-content">
              <h2 className="card-title">Buttons</h2>
              <p className="card-desc">Petit site regroupant des boutons codé en CSS sur une api React</p>
              <div className="card-link-deck">
                <a
                  className="card-link"
                  href="http://ph-buttons.surge.sh"
                >
                  Site
                </a>
                <a
                  className="card-link"
                  href="https://github.com/Paulhennin/Buttons"
                >
                  Github
                </a>
              </div>
            </div>
          </article>
        </div>
        <h2 className="ruby">Ruby / RoR</h2>
        <div className="container__lang-cards ruby">
          <article className="card ruby">
            <div className="card-content">
            <img src={mangahiro} alt="logo site Mangahiro" className="project_logo"/>
              <h2 className="card-title ruby">Mangahiro</h2>
              <p className="card-desc">Site de critiques Manga url : </p>
              <div className="card-link-deck">
                <a
                  className="card-link"
                  href="http://mangahiro.herokuapp.com/mangahiro"
                >
                  Site
                </a>
                <a
                  className="card-link"
                  href="https://github.com/Paulhennin/manga_rebuild"
                >
                  Github
                </a>
              </div>
            </div>
          </article>
          <article className="card ruby">
            <div className="card-content">
              <div>
                <img src={LogoGardien} alt="logo site Un Gardien près de chez soi" className="project_logo" />
                <img src={TitreGardien} alt="titre site Un Gardien près de chez soi" className="project_logo" />
              </div>
              <h2 className="card-title ruby">Un gardien près de chez soi </h2>
              <p className="card-desc">Site de petSitting</p>
              <div className="card-link-deck">
                <a
                  className="card-link"
                  href="http://ungardienpresdechezsoi.herokuapp.com/"
                >
                  Site
                </a>
                <a
                  className="card-link"
                  href="https://github.com/Jordi-LG/Ungardienpresdechezsoi"
                >
                  Github
                </a>
              </div>
            </div>
          </article>
        </div>
        <h2 className="vue">VueJS</h2>
        <div className="container__lang-cards vue">
          <article className="card">
            <div className="card-content">
              <h2 className="card-title vue">BuyFood</h2>
              <p className="card-desc">Site test prise en main VueJS</p>
              <div className="card-link-deck">
                <a
                  className="card-link"
                  href="https://firstattempt-in-vuejs.surge.sh/"
                >
                  Site
                </a>
                <a
                  className="card-link"
                  href="https://github.com/Paulhennin/getStarted-VueJS"
                >
                  Github
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

Porfolio.propTypes = {

};
