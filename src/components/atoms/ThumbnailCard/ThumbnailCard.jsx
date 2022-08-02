import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';


/**
 * @visibleName Thumbnail card: used at the galeri page
 */

const ThumbnailCard = ({
  artwork
}) => {

  const {
    isLoading,
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

ThumbnailCard.PropTypes = {
  /** No user action on button is allowed */
  artwork: PropTypes.object
};

ThumbnailCard.defaultProps = {
  artwork: {
    isLoading: false,
    sourceUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Johannes_Vermeer_%281632-1675%29_-_The_Girl_With_The_Pearl_Earring_%281665%29.jpg/1200px-Johannes_Vermeer_%281632-1675%29_-_The_Girl_With_The_Pearl_Earring_%281665%29.jpg',
    title: 'Girl with a Pearl Earring',
    author: 'Johannes Vermeer',
  }
};
