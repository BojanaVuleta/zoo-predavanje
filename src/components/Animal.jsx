export default function Animal({
    name,
    species,
    date_of_birth,
    sector,
    onRemove,
    onTop,
    idx,
  }) {
    return (
      <>
        <td>{name}</td>
        <td>{species}</td>
        <td>{date_of_birth}</td>
        <td>{sector}</td>
        <td>
          <button onClick={() => onRemove(name)}>Remove</button>
          <button onClick={() => onTop(idx)}>Move to top</button>
        </td>
      </>
    );
  }
  