import React, { useState } from "react";
import Nav from "./Nav";
import Interns from "./Interns";
import DataContext from "./DataContext";
import "./App.css";

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
      imgSrc: "/Images/img14.jpg",
    },
    {
      id: 3,
      name: "Dorcas Amichi",
      score: 23,
      about: "Front End.",
      imgSrc: "/Images/img6.jpg",
    },
    {
      id: 4,
      name: "John Onowa",
      score: 98,
      about: "Back End",
      imgSrc: "/Images/img7.jpg",
    },
    {
      id: 5,
      name: "Anibe Barnabas",
      score: 66,
      about: "Web3",
      imgSrc: "/Images/img15.jpg",
    },
    {
      id: 6,
      name: "Dennis Odoh",
      score: 78,
      about: "Front End",
      imgSrc: "/Images/img9.jpg",
    },
    {
      id: 7,
      name: "Christain Emeka",
      score: 44,
      about: "Back End",
      imgSrc: "/Images/img5.jpg",
    },
    {
      id: 8,
      name: "Ugwayi Tobias",
      score: 21,
      about: "Product Design",
      imgSrc: "/Images/img11.jpg",
    },
    {
      id: 9,
      name: "Abel Odi",
      score: 94,
      about: "Web3",
      imgSrc: "/Images/img12.jpg",
    },
    {
      id: 10,
      name: "Lois Ukpoju",
      score: 90,
      about: "Front End",
      imgSrc: "/Images/img13.jpg",
    },
    {
      id: 11,
      name: "Ejura Grace",
      score: 88,
      about: "Back End",
      imgSrc: "/Images/img5.jpg",
    },
    {
      id: 12,
      name: "Arome Ukpoju",
      score: 92,
      about: "Front End",
      imgSrc: "/Images/img16.jpg",
    },
    {
      id: 13,
      name: "David Ojonimi",
      score: 99,
      about: "Product Design",
      imgSrc: "/Images/img14.jpg",
    },
    {
      id: 14,
      name: "chidera Samuel",
      score: 22,
      about: "Front End.",
      imgSrc: "/Images/img17.jpg",
    },
    {
      id: 15,
      name: "Onuche Omachi",
      score: 90,
      about: "Back End",
      imgSrc: "/Images/img18.jpg",
    },
    {
      id: 16,
      name: "Shaibu Barnabas",
      score: 71,
      about: "Web3",
      imgSrc: "/Images/img19.jpg",
    },
    {
      id: 17,
      name: "Mike Daniel",
      score: 79.6,
      about: "Front End",
      imgSrc: "/Images/img20.jpg",
    },
    {
      id: 18,
      name: "chukwu Emeka",
      score: 37,
      about: "Back End",
      imgSrc: "/Images/img21.jpg",
    },
    {
      id: 19,
      name: "Joy Mike",
      score: 61,
      about: "Product Design",
      imgSrc: "/Images/img22.jpg",
    },
    {
      id: 20,
      name: "Jacob Abel",
      score: 94,
      about: "Web3",
      imgSrc: "/Images/img23.jpg",
    },
    {
      id: 21,
      name: "ugochukwu Daniel",
      score: 90,
      about: "Front End",
      imgSrc: "/Images/img24.jpg",
    },
  
  ]);

  return (
    <DataContext.Provider value={{ items, setItems }}>
      <div className="App">
        <Nav />
        <Interns />
      </div>
    </DataContext.Provider>
  );
};

export default App;
