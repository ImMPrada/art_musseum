import React from "react";
import propTypes from 'prop-types';
import { Drawing } from "../../../assets/icons";
import './styles.scss';


/**
 * @visibleName Loading image indicator: used when the card is loading image
 */

const LoadingImageIndicator = () => {

  return (
    <div className="loadin-image-indicator">
      <Drawing />
    </div>
  )
}

export default LoadingImageIndicator;

LoadingImageIndicator.propTypes = {
  /** An object with data of the artwork */
};

LoadingImageIndicator.defaultProps = null;
