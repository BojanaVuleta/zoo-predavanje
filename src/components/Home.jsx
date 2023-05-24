import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Dobrodosli!</h1>
    <Link to="/animals" class="list">Pogledajte listu zivotinja</Link>
    </div>
  );
};
export default Home;