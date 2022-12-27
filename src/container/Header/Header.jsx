import React from 'react';
import { SubHeading } from '../../components';

import { images } from "../../constants";
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="">
      {/* <SubHeading title="Chase the new Flavor" /> */}
      <div className='app__header2'>
        <h1 className="app__header-h1">Ramen-Ya</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>Home of the noodles</p>
      </div>
      <div className="app__header-button">
        <button type="button" className="custom__button">ORDER PICKUP</button>
        <button type="button" className="custom__button">ORDER DELIVERY</button>
      </div>
    </div>

  </div>
);

export default Header;
