import Animal from "./Animal";

const AnimalList = ({ animalList, onRemove, onTop }) => {
  return (
    <div>
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
          {animalList.map((animal, index) => (
            <tr key={index}>
              <Animal
                idx={index}
                name={animal.name}
                species={animal.species}
                date_of_birth={animal.date_of_birth}
                sector={animal.sector}
                onRemove={onRemove}
                onTop={onTop}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnimalList;
