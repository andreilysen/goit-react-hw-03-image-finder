import React, { Component } from "react";
import Searchbar from "../Searchbar";
import ImageGallery from "../Gallery";
import Button from "../Button";
import Modal from "../Modal";
import Loader from "../Loader";

import * as imageApi from "../../servise/apiFeatch";
import mapper from "../../utils/mapper";

import "./App.css";
// console.log(imageApi);
class App extends Component {
  state = {
    query: "",
    page: 1,
    isLoading: false,
    images: [],
    isModal: false,
    modalImg: "",
  };

  handleToggleModal = (modalImg) => {
    this.setState({ modalImg: modalImg });
    this.setState({ isModal: !this.state.isModal });
  };

  // EscCloseModal = (event) => {
  //   if (event.key === "Escape") {
  //     this.onCloseModal();
  //   }
  // };

  handleSubmit = (query) => {
    this.setState({ query: query, page: 1, images: [] });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages(query, page);
    }
    if (page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  fetchImages = (query, page) => {
    this.setState({ isLoading: true });

    imageApi
      .fetchImg(query, page)
      .then(({ data: { hits } }) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...mapper(hits)],
        }))
      )
      .catch((error) => console.log(`error`, error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  onClickLoadMore = (e) => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, isModal, query, modalImg } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {!!images.length && (
          <ImageGallery images={images} onModal={this.handleToggleModal} />
        )}
        {images.length >= 12 && !isLoading && (
          <Button onClickLoadMore={this.onClickLoadMore} />
        )}
        {isModal && (
          <Modal
            image={modalImg}
            query={query}
            onCloseModal={this.handleToggleModal}
          />
        )}

        {isLoading && <Loader />}
      </>
    );
  }
}

export default App;
