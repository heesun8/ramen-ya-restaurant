import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from '../../components';
import { images } from "../../constants";
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">2 E 21st St, New York, NY 10001, USA</p>
        <p className="p__opensans">+1 347-237-2217</p>
        <p className="p__opensans">+1 347-378-1111</p>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans2">11:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday - Sunday:</p>
        <p className="p__opensans2">11:00 am - 01:00 am</p>
      </div>
    </div>
    <div className="app__footer-links_logo footer__copyright">
      <p className="p__opensans">2022 Copyright @Ramen-Ya</p>
    </div>
    <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
  </div>
);

export default Footer;
