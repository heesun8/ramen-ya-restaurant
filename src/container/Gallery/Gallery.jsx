import React from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { images } from "../../constants";

import './Gallery.css';

const galleryImages = [images.menu1, images.menu6, images.drink1, images.menu5, images.menu7, images.drink2];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <h1 className="headtext__main">Photo Gallery</h1>
        <button type="button" className="custom__button">Visit Us</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app__gallery-images_card flex__center">
              <img src={image} alt="gallery image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => { scroll("left") }} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => { scroll("right") }} />
        </div>
      </div>

    </div>
  );
};


export default Gallery;
