import React from "react";
import "./ImageList.css";

const ImageList = props => {
  const images = props.images.map(image => {
    return <img src={image.urls.regular} key={image.id} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
