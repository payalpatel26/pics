import React from "react";
import ImagCard from "./imagCard";
import "./imageList.css";

const ImageList = (props) => {
  const images = props.ImageList.map((image) => {
    return <ImagCard key={image.id} imag={image} />;
  });
  return <div className="image-List">{images}</div>;
};

export default ImageList;
