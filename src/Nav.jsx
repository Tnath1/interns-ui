import React, { useContext, useState } from 'react';
import DataContext from './DataContext';

const Nav = () => {
  const { items, setItems } = useContext(DataContext);

  const sortItems = () => {
    const sortedItems = [...items].sort((a, b) => b.score - a.score);
    setItems(sortedItems);
  };

  return (
    <div className='containernav'>
      <div className='nav-container'>
      <h2>List of Interns</h2>
      <button onClick={sortItems} >Highest Scores</button>
      </div>
    </div>
  );
};

export default Nav;

