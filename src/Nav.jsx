import React, { useContext, useState } from 'react';
import DataContext from './DataContext';

const Nav = () => {
  const { items, setItems } = useContext(DataContext);

  const sortItems = () => {
    const sortedItems = [...items].sort((a, b) => b.score - a.score);
    setItems(sortedItems);
  };

  return (
    <div>
      <h2>Navigation</h2>
      <button onClick={sortItems} >Sort Items by Score</button>
    </div>
  );
};

export default Nav;

