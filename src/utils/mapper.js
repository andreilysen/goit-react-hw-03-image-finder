const mapper = (hits) => {
  return hits.map(
    ({ id: imageId, webformatURL: smallImg, largeImageURL: modalImg }) => ({
      imageId,
      smallImg,
      modalImg,
    })
  );
};

export default mapper;
