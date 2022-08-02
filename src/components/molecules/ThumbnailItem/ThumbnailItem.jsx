import React, { useEffect, useState } from "react";
import {
  ThumbnailCard,
  LoadingImageIndicator
} from '../../atoms';
import './styles.scss';


const renderAtom = (isLoading, artwork) => {
  if(isLoading) return <LoadingImageIndicator />

  return (
    <ThumbnailCard
      artwork={artwork}
    />
  )
}

const ThumbnailItem = ({time}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [artwork, setArtWork] = useState(null);

  const newArtwork = () => (
    setArtWork({
      isLoading: false,
      sourceUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Johannes_Vermeer_%281632-1675%29_-_The_Girl_With_The_Pearl_Earring_%281665%29.jpg/1200px-Johannes_Vermeer_%281632-1675%29_-_The_Girl_With_The_Pearl_Earring_%281665%29.jpg',
      title: 'Girl with a Pearl Earring',
      author: 'Johannes Vermeer',
    })
  )

  useEffect(() => {setTimeout(newArtwork, time)}, [])
  
  useEffect(() => {
    if(artwork) setIsLoading(false)
  }, [artwork])


  return (
    <div className="thumbnail-item">
      {renderAtom(isLoading, artwork)}
    </div>
  )
}

export default ThumbnailItem;
