import React from "react";
import styles from "./Gallery.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ imageId, smallImg }) => {
  //   console.log(`imageId`, imageId);
  return (
    <li>
      <img className={styles.image} id={imageId} src={smallImg} alt="query" />
    </li>
  );
};

ImageGalleryItem.prototype = {
  smallImg: PropTypes.string.isRequired,
  imageId: PropTypes.number.isRequired,
};

export default ImageGalleryItem;
