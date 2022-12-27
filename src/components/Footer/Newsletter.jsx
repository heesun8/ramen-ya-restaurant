import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Review" />
      <h1 className="headtext__main">How Was Our Service</h1>
      <p className="p__opensans">Let Us Know Your Thoughts!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Your e-mail address"></input>
      <textarea type="text" placeholder="Your review"></textarea>
      <button type="button" className="custom__button"> Submit</button>
    </div>
  </div>
);

export default Newsletter;
