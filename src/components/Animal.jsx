import { useParams } from "react-router-dom";

export default function Animal({ animalsList }) {
 
  const { id } = useParams();
  const animal = animalsList.find((animal) => animal.id === parseInt(id));

  return (
<div>
  <h1>{animal.name}</h1>
  <p>Species: {animal.species}</p>
  <p>Date of birth: {animal.date_of_birth}</p>
  <p>Sector: {animal.sector}</p>

</div>
  );
}