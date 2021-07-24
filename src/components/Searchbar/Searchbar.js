import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Searchbar.module.css";

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: "",
  };

  handleChangeInput = ({ target: { value } }) => {
    this.setState({ value: value });
    // console.log(value);
  };

  handleSubmit = (e) => {
    const { value } = this.state;
    const { onSubmit } = this.props;
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value);
      this.setState({ value: "" });
    }
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.Button}>
            <span className={styles.Label}>Search</span>
          </button>

          <input
            className={styles.Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
