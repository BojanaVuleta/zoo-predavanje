import { useState } from "react";

const AnimalsDisplay = ({ animals }) => {
  return (
    <div>
      <AnimalForm addAnimal={addAnimal} />
      <table>
        <thead>
          <tr>
            <th>Ime zivotinje</th>
            <th>Vrsta zivotinje</th>
            <th>Datum zivotinje</th>
            <th>Sektor zivotinje</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            // pozovi hook
            <tr key={index}>
              <td>{animal.name}</td>
              <td>{animal.species}</td>
              <td>{animal.date_of_birth}</td>
              <td>{animal.sector}</td>
              <td>
                <button onClick={() => onRemove(animal.name)}>Remove</button>
                <button onClick={() => onTop(index)}>Move to top</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnimalsDisplay;