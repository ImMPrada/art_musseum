import React from 'react';
import { ThumbnailItem } from './molecules';
import '../assets/styles/main.scss'

const App = () => (
  <div id="example">
    <ThumbnailItem 
      time={2000}
    />
    <ThumbnailItem 
      time={500}
    />
    <ThumbnailItem 
      time={50}
    />
    <ThumbnailItem 
      time={3000}
    />
    <ThumbnailItem 
      time={10000}
    />
    <ThumbnailItem 
      time={100}
    />
  </div>
);

export default App;
