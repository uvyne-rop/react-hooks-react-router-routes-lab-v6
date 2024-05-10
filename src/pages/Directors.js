


import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:4000/directors")
    .then(r => r.json())
    .then(data => setDirectors(data))
    .catch(error => console.error(error))
  }, []);

  const directorList = directors.map(director => <MovieCard key={director.id} title={director.name} id={director.id} />);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorList}
      </main>
    </>
  );
}

export default Directors;
