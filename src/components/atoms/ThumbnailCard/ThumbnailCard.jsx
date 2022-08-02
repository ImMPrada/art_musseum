import React from "react";
import './styles.scss';


const ThumbnailCard = () => {

  return (
    <div className="thumbnail-card">
      <div className="thumbnail-card__back">
        <div className="thumbnail-card__cover">
        </div>
        <div className="thumbnail-card__over">
          <h3 className="thumbnail-card__over__title">
            Starry Night
          </h3>
          <h4 className="thumbnail-card__over__artist">
            Vincent Van Gogh
          </h4>
        </div>
        <img src='https://concepto.de/wp-content/uploads/2018/02/artes-plasticas-cuadro-min-e1519328319772.jpg' alt="" />
      </div>
    </div>
  )
}

export default ThumbnailCard;
