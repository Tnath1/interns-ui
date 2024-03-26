import React, { useState } from "react";
import Nav from "./Nav";
import Interns from "./Interns";
import DataContext from "./DataContext";
import './App.css';


const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Arome Jonathan",
      score: 92,
      about: "Front End",
      imgSrc: "/Images/img-4.jpg",
    },
    {
      id: 2,
      name: "David Ukpoju",
      score: 34,
      about: "Product Design",
      imgSrc: "/Images/img-4.jpg",
    },
    {
      id: 3,
      name: "Dorcas Amichi",
      score: 23,
      about: "Front End.",
      imgSrc: "/Images/img-4.jpg",
    },
    {
      id: 4,
      name: "John Onowa",
      score: 98,
      about: "Back End",
      imgSrc: "/Images/img-4.jpg",
    },
    {
      id: 5,
      name: "Anibe Barnabas",
      score: 66,
      about: "Web3",
      imgSrc: "/Images/img-4.jpg",
    },
    {
      id: 6,
      name: "Dennis Odoh",
      score: 78,
      about: "Front End",
      imgSrc: "/Images/img-4.jpg",
    },
    {
      id: 7,
      name: "Christain Emeka",
      score: 44,
      about: "Back End",
      imgSrc: "/Images/img-4.jpg",
    },
    {
      id: 8,
      name: "Ugwayi Tobias",
      score: 21,
      about: "Product Design",
      imgSrc: "/Images/img-4.jpg",
    },
    {
      id: 9,
      name: "Abel Odi",
      score: 94,
      about: "Web3",
      imgSrc: "/Images/img-4.jpg",
    },
    {
      id: 10,
      name: "Lois Ukpoju",
      score: 90,
      about: "Front End",
      imgSrc: "/Images/img-4.jpg",
    },
    {
      id: 11,
      name: "Ejura Grace",
      score: 88,
      about: "Back End",
      imgSrc: "/Images/img-4.jpg",
    },
    
  ]);

  return (
    <DataContext.Provider value={{ items, setItems }}>
      <div className="App">
        <h1>My Application</h1>
        <Nav />
        <Interns />
      </div>
    </DataContext.Provider>
  );
};

export default App;


