import React, { Component } from "react";
import Searchbar from "../Searchbar";
import ImageGallery from "../Gallery";
import * as imageApi from "../../servise/apiFeatch";
import mapper from "../../utils/mapper";

import "./App.css";
// console.log(imageApi);
class App extends Component {
  state = {
    query: "",
    page: 1,
    images: [],
  };
  handleSubmit = (query) => {
    this.setState({ query: query });
  };
  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages(query, page);
    }
  }
  fetchImages = (query, page) => {
    imageApi
      .fetchImg(query, page)
      .then(({ data: { hits } }) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...mapper(hits)],
        }))
      )
      .catch((error) => console.log(`error`, error));
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {!!images.length && <ImageGallery images={images} />}
      </>
    );
  }
}

export default App;
