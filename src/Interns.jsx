import React, { useContext } from "react";
import DataContext from "./DataContext";

const Interns = () => {
  const { items } = useContext(DataContext);

  // const ObjectCard = () => (
  //            <div className="card">
  //              <img src={items.imgSrc} alt={object.name} />
  //              <h3>{items.name}</h3>
  //              <p>Score: {items.score}/100</p>
  //              <p>{items.about}</p>
  //            </div>
  //          );

  return (
    // <div>
    //   <h2>Items List</h2>

    //     <div className="container">
    //       <div className="card-container">
    //         <div className="card">
    //         {items.map((item) => (
    //           <div key={item.id}>
    //             <img src={item.imgSrc}  alt={item.name} />
    //             <h3>{item.name}</h3>
    //             <p>{item.score}</p>
    //           </div>
    //         ))}
    //         </div>
    //       </div>
    //     </div>

    // </div>

    <div>
      <h2>Items List</h2>
      <div className="container">
        <div className="card-container">
          {items.map((item) => (
            // Move the "card" class here, so each item is its own card
            <div className="card" key={item.id}>
              <img src={item.imgSrc} alt={item.name} />
              <div className="text">
              <h3>{item.name}</h3>
              <p>Track: {item.about}</p>
              <p>Score: {item.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="app">
  //     <div className="card-container">
  //       {sortedObjects.map(object => (
  //         <ObjectCard key={object.id} object={object} />
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default Interns;

// import React, { useData } from 'react'

// const Interns = () => {
//   const { items } = useData();

//       const ObjectCard = () => (
//         <div className="card">
//           <img src={items.imgSrc} alt={object.name} />
//           <h3>{items.name}</h3>
//           <p>Score: {items.score}/100</p>
//           <p>{items.about}</p>
//         </div>
//       );

// return (
//   <div className="app">
//     <div className="card-container">
//       {sortedObjects.map(object => (
//         <ObjectCard key={object.id} object={object} />
//       ))}
//     </div>
//   </div>
// );
// }

// // {items.map((item) => (
// //   <div key={item.id}>
// //     <h3>{item.name}</h3>
// //     <p>Score: {item.score}</p>
// //   </div>
// // ))}

// export default Interns
