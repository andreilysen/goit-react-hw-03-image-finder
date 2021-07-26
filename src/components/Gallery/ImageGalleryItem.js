import React from "react";
import styles from "./gallery.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ imageId, smallImg, onClick }) => {
  //   console.log(`imageId`, imageId);
  return (
    <li id={imageId}>
      <img
        className={styles.image}
        src={smallImg}
        alt="query"
        onClick={onClick}
      />
    </li>
  );
};

ImageGalleryItem.prototype = {
  smallImg: PropTypes.string.isRequired,
  imageId: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
