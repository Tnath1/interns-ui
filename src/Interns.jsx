import React from 'react'

const Interns = () => {

    const objects = [
        { id: 1, name: 'Arome Jonathan', score: 92, about: 'An advanced spacecraft designed for deep space exploration.', imgSrc: '/Images/img-4.jpg' },
        { id: 1, name: 'Arome Jonathan', score: 92, about: 'An advanced spacecraft designed for deep space exploration.', imgSrc: '/Images/img-4.jpg' },
        { id: 1, name: 'Arome Jonathan', score: 92, about: 'An advanced spacecraft designed for deep space exploration.', imgSrc: '/Images/img-4.jpg' },
        { id: 1, name: 'Arome Jonathan', score: 92, about: 'An advanced spacecraft designed for deep space exploration.', imgSrc: '/Images/img-4.jpg' },
        { id: 1, name: 'Arome Jonathan', score: 92, about: 'An advanced spacecraft designed for deep space exploration.', imgSrc: '/Images/img-4.jpg' },
        { id: 1, name: 'Arome Jonathan', score: 92, about: 'An advanced spacecraft designed for deep space exploration.', imgSrc: '/Images/img-4.jpg' },
        { id: 1, name: 'Arome Jonathan', score: 92, about: 'An advanced spacecraft designed for deep space exploration.', imgSrc: '/Images/img-4.jpg' },
        { id: 1, name: 'Arome Jonathan', score: 92, about: 'An advanced spacecraft designed for deep space exploration.', imgSrc: '/Images/img-4.jpg' },
        { id: 1, name: 'Arome Jonathan', score: 92, about: 'An advanced spacecraft designed for deep space exploration.', imgSrc: '/Images/img-4.jpg' },
        { id: 1, name: 'Arome Jonathan', score: 92, about: 'An advanced spacecraft designed for deep space exploration.', imgSrc: '/Images/img-4.jpg' },
        { id: 1, name: 'Arome Jonathan', score: 92, about: 'An advanced spacecraft designed for deep space exploration.', imgSrc: '/Images/img-4.jpg' },
        
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