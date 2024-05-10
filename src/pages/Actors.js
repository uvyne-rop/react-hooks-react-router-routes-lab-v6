



import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:4000/actors")
    .then(r => r.json())
    .then(data => setActors(data))
    .catch(error => console.error(error))
  }, []);

  const actorList = actors.map(actor => <MovieCard key={actor.id} title={actor.name} id={actor.id} />);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorList}
      </main>
    </>
  );
}

export default Actors;
