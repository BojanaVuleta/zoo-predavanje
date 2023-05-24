import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AnimalForm = ({ addAnimalFunc }) => {
  const navigate= useNavigate();
  const [animal, setAnimal] = useState({
    name: "",
    species: "",
    dateOfBirth: "",
    sector: "bird",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnimal((prevAnimal) => ({
      ...prevAnimal,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent form submission
    addAnimalFunc(animal);
    navigate("/animals");
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={animal.name}
        onChange={handleInputChange}
      />
      <label>Species</label>
      <input
        type="text"
        name="species"
        value={animal.species}
        onChange={handleInputChange}
      />
      <label>Date of Birth</label>
      <input
        type="date"
        name="dateOfBirth"
        value={animal.dateOfBirth}
        onChange={handleInputChange}
      />
      <select name="sector" value={animal.sector} onChange={handleInputChange}>
        <option value="bird">Bird</option>
        <option value="snake">Snake</option>
      </select>
      <button type="submit">Add Animal</button>
    </form>
  );
};

export default AnimalForm;