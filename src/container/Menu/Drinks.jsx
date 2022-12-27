import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from "../../constants";
import './Drinks.css';

const Drinks = () => (
  <div className="app__drinks flex__center section__padding" id="menu">
    <div className="app__drinks-title">
      {/* <SubHeading title="Menu that fits your palatte" /> */}
      <h1 className="headtext__main">Drink Menu</h1>
    </div>
    <div className="app__drinks-menu">
      <div className="app__drinks-menu_wines flex__center">
        <p className="app__drinks-menu_heading">Alcohol</p>
        <div className="app__drinks-menu_items">
          {data.drink1.map((drink, index) => (
            <MenuItem key={drink.title + index} title={drink.title} price={drink.price} tags={drink.tags} />
          ))
          }
        </div>
      </div>
      <div className="app__drinks-menu_img">
        <img src={images.drink5} alt="menu img" />
      </div>
      <div className="app__drinks-menu_cocktails flex__center">
        <p className="app__drinks-menu_heading">Non-Alcohol</p>
        <div className="app__drinks-menu_items">
          {data.drink2.map((drink, index) => (
            <MenuItem key={drink.title + index} title={drink.title} price={drink.price} tags={drink.tags} />
          ))
          }
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default Drinks;
