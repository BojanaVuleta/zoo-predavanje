import { useState } from "react";
import "./App.css";
import AnimalForm from "./components/AnimalForm";
import AnimalList from "./components/AnimalList";
import SectorsDisplay from "./components/SectorsDisplay";

export const listOfAnimals = [
  {
    name: "krava",
    species: "mamel",
    date_of_birth: new Date().toDateString(),
    sector: "bird",
  },
  {
    name: "delfin",
    species: "mamel",
    sector: "bird",
  },
  {
    name: "koza",
    species: "mamel",
    sector: "bird",
  },
  {
    name: "ovca",
    species: "mamel",
    date_of_birth: new Date().toDateString(),
    sector: "snake",
  },
  {
    name: "pas",
    species: "mamel",
    date_of_birth: new Date().toDateString(),
    sector: "snake",
  },
];

function App() {
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
    setAnimals([...animals, animal]);
  };
  //Napraviti dugme koje redirektuje
  return (
    <div className="App">
      <AnimalForm addAnimalFunc={addAnimal} />
      <AnimalList animalList={animals} onRemove={onRemove} onTop={onTop} />
      <SectorsDisplay animalList={animals} />
    </div>
  );
}

export default App;
