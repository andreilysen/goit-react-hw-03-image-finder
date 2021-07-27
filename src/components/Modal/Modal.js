import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Modal.module.css";

// const Modal = ({ image, query, onCloseModal }) => {
//   console.log(`image`, image);
//   return (
//     <div className={styles.Overlay} onClick={() => onCloseModal()}>
//       <div className={styles.Modal}>
//         <img src={image} alt={query} />
//       </div>
//     </div>
//   );
// };

class Modal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    image: PropTypes.string,
    query: PropTypes.string.isRequired,
  };
  componentDidMount() {
    window.addEventListener("keydown", this.EscCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.EscCloseModal);
  }

  EscCloseModal = (event) => {
    if (event.key === "Escape") {
      this.props.onCloseModal();
      // window.removeEventListener("keydown", this.EscCloseModal);
    }
  };

  clickCloseModal = (e) => {
    this.props.onCloseModal();
    // window.removeEventListener("keydown", this.EscCloseModal);
  };

  render() {
    const { image, query } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.clickCloseModal}>
        <div className={styles.Modal}>
          <img src={image} alt={query} />
        </div>
      </div>
    );
  }
}

export default Modal;
