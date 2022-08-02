import React from "react";
import './styles.scss';


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
