import React from "react";
import { BsMailbox, BsPhone, BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">

        

      <div className="footer-section-one">
        <div className="footer-section-one-left">
      <p>Nous Contacter</p>
      <button className="primary-button"> <BsPhone /> 01 22 33 44 55</button>
      <button className="primary-button"> contact@kunto.fr</button>
      </div>
        <div className="footer-logo-container">
           
            </div>
        <div className="footer-icons">
        <p> NOUS SUIVRE</p>
          <FaFacebookF />
          <SiLinkedin />
          <BsYoutube />
          
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
            <h3>PLAN DE SITE</h3>
          <span>Accueil</span>
          <span>À propos</span>
          <span>Entreprises</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>
        <div className="footer-section-columns">
        <h3>KUNTO & VOUS</h3>
          <span>Connexion</span>
          <span>Devenir coash</span>
          <span>Kunto recrute !</span>
          <span>Nos partenaires</span>
          <span>Milieu associatif</span>

        </div>

        <div className="footer-section-columns">
        <h3>INFORMATIONS</h3>
          <span>Information légales</span>
          <span>Conditions générales</span>
          <span>Informations Kunto</span>
        </div>

        <div className="footer-section-columns">
          <span><BsMailbox /> NEWSLETTER</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;