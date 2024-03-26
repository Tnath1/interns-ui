import React from 'react';

const DataContext = React.createContext();

export default DataContext;

// const DataProvider = ({ children }) => {
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       name: "Arome Jonathan",
//       score: 92,
//       about: "Front End",
//       imgSrc: "/Images/img-4.jpg",
//     },
//     {
//       id: 1,
//       name: "Arome Jonathan",
//       score: 34,
//       about: "Product Design",
//       imgSrc: "/Images/img-4.jpg",
//     },
//     {
//       id: 1,
//       name: "Arome Jonathan",
//       score: 23,
//       about: "Front End.",
//       imgSrc: "/Images/img-4.jpg",
//     },
//     {
//       id: 1,
//       name: "Arome Jonathan",
//       score: 98,
//       about: "Back End",
//       imgSrc: "/Images/img-4.jpg",
//     },
//     {
//       id: 1,
//       name: "Arome Jonathan",
//       score: 66,
//       about: "Web3",
//       imgSrc: "/Images/img-4.jpg",
//     },
//     {
//       id: 1,
//       name: "Arome Jonathan",
//       score: 78,
//       about: "Front End",
//       imgSrc: "/Images/img-4.jpg",
//     },
//     {
//       id: 1,
//       name: "Arome Jonathan",
//       score: 44,
//       about: "Back End",
//       imgSrc: "/Images/img-4.jpg",
//     },
//     {
//       id: 1,
//       name: "Arome Jonathan",
//       score: 21,
//       about: "Product Design",
//       imgSrc: "/Images/img-4.jpg",
//     },
//     {
//       id: 1,
//       name: "Arome Jonathan",
//       score: 94.6,
//       about: "Web3",
//       imgSrc: "/Images/img-4.jpg",
//     },
//     {
//       id: 1,
//       name: "Arome Jonathan",
//       score: 90,
//       about: "Front End",
//       imgSrc: "/Images/img-4.jpg",
//     },
//     {
//       id: 1,
//       name: "Arome Jonathan",
//       score: 88,
//       about: "Back End",
//       imgSrc: "/Images/img-4.jpg",
//     },
//   ]);

//   const sortItems = () => {
//     const sorted = [...items].sort((a, b) => b.score - a.score);
//     setItems(sorted);
//   };

//   return (
//     <DataContext.Provider value={{ items, sortItems }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export default DataProvider