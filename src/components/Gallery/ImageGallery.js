import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import PropTypes from "prop-types";

import styles from "./Gallery.module.css";

const ImageGallery = ({ images, onModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ imageId, smallImg, modalImg }) => (
        <ImageGalleryItem
          key={imageId}
          imageId={imageId}
          smallImg={smallImg}
          onClick={() => onModal(modalImg)}
        />
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
    }).isRequired
  ).isRequired,
  onModal: PropTypes.func.isRequired,
};

export default ImageGallery;
