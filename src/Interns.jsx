import React, { useContext } from "react";
import DataContext from "./DataContext";

const Interns = () => {
  const { items } = useContext(DataContext);


  return (

    <div>
      <h2>Items List</h2>
      <div className="container">
        <div className="card-container">
          {items.map((item) => (
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
};

export default Interns;

