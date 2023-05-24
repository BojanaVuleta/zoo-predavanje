const animalSector = ["bird", "snake"];
export default function SectorsDisplay({ animalList }) {
  const showAnimals = (sectorName) => {
    alert(
      animalList
        .filter((animal) => animal.sector === sectorName)
        .map((animal) => animal.name)
    );
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Ime sektora</th>
          <th>Show</th>
        </tr>
      </thead>
      <tbody>
        {animalSector.map((sector, index) => (
          // pozovi hook
          <tr key={index}>
            <td>{sector}</td>
            <td>
              <button onClick={() => showAnimals(sector)}>Show</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}