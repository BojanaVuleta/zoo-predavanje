import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AnimalForm from "./components/AnimalForm";
import AnimalList from "./components/AnimalList";
import SectorsDisplay from "./components/SectorsDisplay";
import Home from "./components/Home";
import Animal from "./components/Animal"
import Sector from "./components/Sector";
import Sectors from "./components/SectorsDisplay";



export const listOfAnimals = [
  {
    id:1,
    name: "krava",
    species: "mamel",
    date_of_birth: new Date().toDateString(),
    sector: "bird",
  },
  {
    id:2,
    name: "delfin",
    species: "mamel",
    sector: "bird",
  },
  {
    id:3,
    name: "koza",
    species: "mamel",
    sector: "bird",
  },
  {
    id:4,
    name: "ovca",
    species: "mamel",
    date_of_birth: new Date().toDateString(),
    sector: "snake",
  },
  {
    id:5,
    name: "pas",
    species: "mamel",
    date_of_birth: new Date().toDateString(),
    sector: "snake",
  },
];


function App() {

  const animalSector = [{id:1,name:"bird"}, {id:2,name:"snake"}];
  const [animals, setAnimals] = useState(listOfAnimals);

  const onRemove = (name) => {
    setAnimals((prevState) =>
      prevState.filter((animal) => animal.name !== name)
    );
  };
  const onTop = (index) => {
    const topAnimal = animals[index];
    setAnimals((prevState) => [
      topAnimal,
      ...prevState.filter((_, id) => id !== index),
    ]);
  };


  const addAnimal = (animal) => {
    const newId = animals[animals.length - 1].id + 1;
    const newAnimal = { ...animal, id: newId };
    setAnimals([...animals, newAnimal]);
  };
 
  const showAnimals = (sectorName) => {
    alert(
      animals
        .filter((animal) => animal.sector === sectorName)
        .map((animal) => animal.name)
    );
  };
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/animals" element={<AnimalList onRemove={onRemove} onTop={onTop} animalList={animals}/>}/>
        <Route path="/addAnimal" element={<AnimalForm addAnimalFunc={addAnimal}/>}/>
        <Route path="/animals/:id" element={<Animal animalsList={animals}/>}/>
        <Route path="sectors" element={<Sectors animalList={animals} animalSector={animalSector}/>}/>
        <Route path="sectors/:id" element={<Sector animalList={animals} showAnimals={showAnimals}/>}/>
      </Routes>

      {/* <AnimalForm addAnimalFunc={addAnimal} />
      <AnimalList animalList={animals} onRemove={onRemove} onTop={onTop} />
      <SectorsDisplay animalList={animals} /> */}
    </div>
  );
}

export default App;
