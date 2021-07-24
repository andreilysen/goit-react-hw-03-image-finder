import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import PropTypes from "prop-types";

import styles from "./Gallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ imageId, smallImg, modalImg }) => (
        <ImageGalleryItem key={imageId} imageId={imageId} smallImg={smallImg} />
      ))}
    </ul>
  );
};

ImageGallery.prototype = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      imageId: PropTypes.string.isRequired,
      smallImg: PropTypes.string.isRequired,
      modalImg: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
