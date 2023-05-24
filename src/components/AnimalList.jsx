// import Animal from "./Animal";
import { Link } from "react-router-dom";

const AnimalList = ({ animalList, onRemove, onTop, addAnimal }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {/* <th>Ime zivotinje</th> */}
            {/* <th>Vrsta zivotinje</th>
            <th>Datum zivotinje</th>
            <th>Sektor zivotinje</th>
            <th>Remove</th> */}
          </tr>
        </thead>
        <tbody class="container">
          {animalList.map((animal, index) => (
            <tr key={index}>
              <td class="title">{animal.name}</td>
              {/* <Animal
                idx={index}
                name={animal.name}
                species={animal.species}
                date_of_birth={animal.date_of_birth}
                sector={animal.sector}
                onRemove={onRemove}
                onTop={onTop} */}
              {/* /> */}
              <td><Link class="button" to={`/animals/${animal.id}`}><button>See Animal</button></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link class="button"to="/addAnimal" state={addAnimal}><button>Add animal</button></Link>
    </div>
  );
};

export default AnimalList;
