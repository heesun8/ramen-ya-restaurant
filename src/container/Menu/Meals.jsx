import React from 'react';

import {  MenuItem } from '../../components';
import { images, data } from "../../constants";
import './Meals.css';

const Meals = () => (
  <div className="app__meals flex__center section__padding" id="menu">
    <div className="app__meals-title">
      <h1 className="headtext__main">Ramen-Ya's Special</h1>

    </div>
    <div className="app__meals-menu">
      <div className="app__meals-menu_wines flex__center">
        <p className="app__meals-menu_heading">Appetizers</p>
        <div className="app__meals-menu_items">
          {data.ramen1.map((ramen, index) => (
            <MenuItem key={ramen.title + index} title={ramen.title} price={ramen.price} tags={ramen.tags} />
          ))
          }
        </div>
      </div>
      <div className="app__meals-menu_img">
        <img src={images.menu8} alt="menu img" />
      </div>
      <div className="app__meals-menu_cocktails flex__center">
        <p className="app__meals-menu_heading">Meals</p>
        <div className="app__meals-menu_items">
          {data.ramen2.map((ramen, index) => (
            <MenuItem key={ramen.title + index} title={ramen.title} price={ramen.price} tags={ramen.tags} />
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

export default Meals;
