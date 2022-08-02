import React from "react";
import propTypes from 'prop-types';
import './styles.scss';


/**
 * @visibleName Thumbnail card: used at the galeri page
 */

const ThumbnailCard = ({
  artwork
}) => {

  const {
    sourceUrl,
    title,
    author,
  } = artwork

  return (
    <div className="thumbnail-card">
      <div className="thumbnail-card__back">
        <div className="thumbnail-card__cover">
        </div>
        <div className="thumbnail-card__over">
          <h3 className="thumbnail-card__over__title">
            {title}
          </h3>
          <h4 className="thumbnail-card__over__artist">
            {author}
          </h4>
        </div>
        <img src={sourceUrl} alt="" />
      </div>
    </div>
  )
}

export default ThumbnailCard;

ThumbnailCard.propTypes = {
  /** An object with data of the artwork */
  artwork: propTypes.shape ({
    /** url to the thumbnail */
    sourceUrl: propTypes.string,
    /** artwork's title */
    title: propTypes.string,
    /** artwork's name */
    author: propTypes.string,
  })
};

ThumbnailCard.defaultProps = {
  artwork: {
    sourceUrl: '',
    title: '',
    author: '',
  }
};
