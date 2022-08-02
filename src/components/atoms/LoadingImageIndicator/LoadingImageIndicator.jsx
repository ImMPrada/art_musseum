import React from "react";
import { Drawing } from "../../../assets/icons";
import './styles.scss';


const LoadingImageIndicator = () => {

  return (
    <div className="loadin-image-indicator">
      <Drawing />
    </div>
  )
}

export default LoadingImageIndicator;
