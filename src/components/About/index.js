import React from 'react';
import PropTypes from 'prop-types';

import SnakeButtons from './SnakeButtons';
import portrait from './portrait.jpg';
import './style.scss';

export default function About() {
  return (
    <main className="container__about">
      <img src={portrait} className="img-cv" alt="profil of me" />
      <section className="personnal"> 
        <h1 className="titlename">Paul Hennin</h1>
        <ul className="personnal-lists">
          <li className="personnal-list">henninpaul@gmail.com</li>
          <li className="personnal-list">0682850333</li>
          <li className="personnal-list">20, rue Paul Valéry, Restinclières</li>
          <li className="personnal-list">né le 06 Mars 1994</li>
        </ul>
      </section>
      <section className="professionnal">
        <h2 className="cv-titles">Expériences Professionnelles</h2>
        <div className="professionnal-container">
          <ul className="professionnal-lists">
            <li className="professionnal-list">
              <em>Agent service commercial des trains</em> – CDD Saisonnier > SNCF, 
              ECT Montpellier, 12 rue Colin 34000 Montpellier
            </li>
            <li className="professionnal-list">
              <em>Assistant laboratoire</em> - Intérim. > Sakata, 
              Rue Jean moulin, 30620 Uchaud
            </li>
            <li className="professionnal-list">
              <em>Préparateur de commandes</em> – CDI étudiant > Chronodrive, 
              350 route de Nîmes 34920 Le Crès
            </li>
            <li className="professionnal-list"><em>Employé Polyvalent</em> – CDI étudiant > KFC, 
              rue Gastion Bachelard 34070 Montpellier
            </li>
          </ul>
        </div>
      </section>
      <section className="studies">
        <h2 className="cv-titles">Formations</h2>
        <div className="studies-container">
          <ul className="studies-list">
            <li className="studies-list">
              <em>Formation WebDevelopment</em> > O'clock,
              Organisme reconnu grande école du numérique
            </li>
            <li className="studies-list">
              <em>Formation WebDevelopment</em> > THP,
              TheHackingProject, 52 rue de la verrerie, 75003 Paris
            </li>
            <li className="studies-list">
              <em>Formation Game Art</em>, 1ère année > IPESAA, 
              15 place d'Aguesseau, 34000 Montpellier
            </li>
            <li className="studies-list">
              <em>Mise à Niveau en Arts Appliqués</em> >IPESAA, 
              15 place d'Aguesseau, 34000 Montpellier
            </li>
            <li className="studies-list">
              <em>DUT Métiers du Multimédia et de l’Internet</em>, 1ère année > IUT,
              3 Place du 14 Juillet 34505 Béziers
            </li>
          </ul>
        </div>
      </section>
      <section className="hobbies">
        <h2 className="cv-titles">Informations Complémentaires</h2>
        <div className="hobbies-container">
          <ul className="hobbies-lists">
            <li className="hobbies-list">
              <em>Stack Technique </em>
              JS, NodeJS, ReactJS, RoR, Ruby, Scss, Express, Sequelize
            </li>
            <li className="hobbies-list">
              <em>Langues </em>
              Français: Écrit et parlé.
              Anglais: Écrit et parlé.
            </li>
            <li className="hobbies-list">
              <em>Permis</em> Détenteur du Permis B et d’un véhicule personnel.
            </li>
            <li className="hobbies-list">
              <em>Loisirs</em> Informatique, Manga, écriture
            </li>
            <li classNameName="hobbies-list">
              <em>Voyage</em>  Australie, Canada, New-York, Japon
            </li>
          </ul>
        </div>
      </section>
      <section className="back">
        <SnakeButtons />
      </section>
    </main>
);
}

About.propTypes = {

};
