import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuItem">
    <div className="app__menuItem-head">
      <div className="app__menuItem-name">
        <p className="p__main" style={{ color: "#C69749" }}>{title}</p>
      </div>

      <div className="app__menuItem-dash" />

      <div className="app__menuItem-price">
        <p className="p__main" >{price}</p>
      </div>
    </div>
    <div className="app__menuItem-sub">
      <p className="p__opensans2" style={{ color: "#AAA" }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
