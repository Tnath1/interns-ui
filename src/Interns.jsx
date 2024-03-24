import React from 'react'

const Interns = () => {

    const objects = [
        { id: 1, name: 'Galactic Explorer', score: 92, about: 'An advanced spacecraft designed for deep space exploration.', imgSrc: 'path/to/image1.jpg' },
        { id: 2, name: 'Quantum Computer', score: 88, about: 'A powerful computer that uses quantum mechanics to process information.', imgSrc: 'path/to/image2.jpg' },
        { id: 20, name: 'Eco-Friendly House', score: 75, about: 'A sustainable house with minimal environmental impact.', imgSrc: 'path/to/image20.jpg' },
      ];
      
      const ObjectCard = ({ object }) => (
        <div className="card">
          <img src={object.imgSrc} alt={object.name} />
          <h3>{object.name}</h3>
          <p>Score: {object.score}/100</p>
          <p>{object.about}</p>
        </div>
      );

      const sortedObjects = objects.sort((a, b) => b.score - a.score);

      return (
        <div className="app">
          <h1>Objects Display</h1>
          <div className="card-container">
            {sortedObjects.map(object => (
              <ObjectCard key={object.id} object={object} />
            ))}
          </div>
        </div>
      );
}

export default Interns