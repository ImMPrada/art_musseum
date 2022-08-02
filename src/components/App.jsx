import React from 'react';
import { ThumbnailCard } from './atoms';
import '../assets/styles/main.scss'

const App = () => (
  <div id="example">
    <ThumbnailCard 
      artwork =  {{
        isLoading: false,
        sourceUrl: 'https://concepto.de/wp-content/uploads/2018/02/artes-plasticas-cuadro-min-e1519328319772.jpg',
        title: 'Starry Night',
        author: 'Vincent Van Gogh',
      }}
    />
    <ThumbnailCard 
      artwork =  {{
        isLoading: false,
        sourceUrl: 'data:image/jpeg;base64,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',
        title: 'Simelomon',
        author: 'Benito Camelas',
      }}
    />
    <ThumbnailCard 
      artwork =  {{
        isLoading: false,
        sourceUrl: 'https://www.museothyssen.org/sites/default/files/imagen/obras/1972.19_autorretrato.jpg',
        title: 'Me',
        author: 'Egon Schiele',
      }}
    />
    <ThumbnailCard 
      artwork =  {{
        isLoading: false,
        sourceUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Johannes_Vermeer_%281632-1675%29_-_The_Girl_With_The_Pearl_Earring_%281665%29.jpg/1200px-Johannes_Vermeer_%281632-1675%29_-_The_Girl_With_The_Pearl_Earring_%281665%29.jpg',
        title: 'Girl with a Pearl Earring',
        author: 'Johannes Vermeer',
      }}
    />
  </div>
);

export default App;
