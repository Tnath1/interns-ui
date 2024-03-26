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


// const Nav = () => {
//   // State to manage the checkbox checked status
//   const [isChecked, setIsChecked] = useState(false);

//   // Function to toggle the state
//   const toggleChecked = () => setIsChecked(!isChecked);

//   return (
//     <div>
//       <h3>All interns</h3>
//       <label className="switch">
//         <input type="checkbox" checked={isChecked} onChange={toggleChecked} />
//         <span className="slider round"></span>
//       </label>
//     </div>
//   );
// };

// export default Nav;
