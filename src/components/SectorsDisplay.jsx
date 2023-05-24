import { Link } from "react-router-dom";

export default function SectorsDisplay({animalSector}) {

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Ime sektora</th>
          
        </tr>
      </thead>
      <tbody class="center">
        {animalSector.map((sector, index) => (
          // pozovi hook
          <tr key={index}>
          
            <td>{sector.name}</td>
            <td>
              <Link to={`/sectors/${sector.id}`}><button>Show</button></Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}