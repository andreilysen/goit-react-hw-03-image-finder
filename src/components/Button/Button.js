import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.css";

const Button = ({ onClickLoadMore }) => (
  <div className={styles.loadButton}>
    <button className={styles.Button} onClick={() => onClickLoadMore()}>
      Load more
    </button>
  </div>
);

Button.propTypes = {
  onClickLoadMore: PropTypes.func.isRequired,
};

export default Button;
