import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdRamenDining } from 'react-icons/md';


import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.logo1} alt="app logo" />
        </div>
        <ul className="app__navbar-links">
          <li className="p__new"><a href="/">Home</a></li>
          <li className="p__new"><a href="/Meals">Meals</a></li>
          <li className="p__new"><a href="/Drinks">Drinks</a></li>
          <li className="p__new"><a href="/Gallery">Gallery</a></li>
          <li className="p__new"><a href="/Footer">Contact</a></li>

        </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdRamenDining className="overlay__close" fontsize={27} onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__new"><a href="/">Home</a></li>
              <li className="p__new"><a href="/Meals">Meals</a></li>
              <li className="p__new"><a href="/Drinks">Drinks</a></li>
              <li className="p__new"><a href="/Gallery">Gallery</a></li>
              <li className="p__new"><a href="/Footer">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
