// // // // // // import { useEffect, useState } from "react";

// // // // // // function Home() {
// // // // // //   return (
// // // // // //     <>
// // // // // //       <header>
// // // // // //         {/* What component should go here? */}
// // // // // //       </header>
// // // // // //       <main>
// // // // // //         {/* Info goes here! */}
// // // // // //       </main>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default Home;


// // // // // import { useEffect, useState } from "react";
// // // // // import MovieCard from "./MovieCard";
// // // // // import NavBar from "./NavBar";

// // // // // function Home() {
// // // // //   // Assuming you have a list of movies stored in a state variable
// // // // //   const [movies, setMovies] = useState([]);

 
// // // // //   useEffect(() => {
// // // // //     // Fetch movies and update state
// // // // //     // Example:
// // // // //     fetch("http://localhost:3000/movies")
// // // // //       .then(response => response.json())
// // // // //       .then(data => setMovies(data))
// // // // //       .catch(error => console.error("Error fetching movies: ", error));
// // // // //   }, []);

// // // // //   return (
// // // // //     <>
// // // // //       <header>
// // // // //         <NavBar />
// // // // //       </header>
// // // // //       <main>
// // // // //         <h1>Home Page</h1>
// // // // //         {movies.map(movie => (
// // // // //           <MovieCard key={movie.id} title={movie.title} id={movie.id} />
// // // // //         ))}
// // // // //       </main>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Home;


// // // // import React from "react";
// // // // function Home() {
// // // //   return <div>{<h1>Home Page</h1>}</div>;
// // // // }

// // // // export default Home;




// // // import { useEffect, useState } from "react";
// // // import MovieCard from "../components/MovieCard";
// // // import NavBar from "../components/NavBar";

// // // function Home() {
// // //   const [movies, setMovies] = useState([])

// // //   useEffect(() => {
// // //     fetch("http://localhost:4000/movies")
// // //     .then(response => response.json())
// // //     .then(data => setMovies(data))
// // //     .catch(error => console.error(error));
// // //   }, [])
// // //   const movieList = movies.map(movie =>{
// // //     return <MovieCard key={movie.id} movie={movie}/>
// // //   });

// // //   return (
// // //     <>
// // //       <header>
// // //         {/* What component should go here? */}
// // //         <NavBar />
// // //       </header>
// // //       <main>
// // //         {/* Info goes here! */}
// // //         <h1>Home Page</h1>
// // //         {movieList}
// // //       </main>
// // //     </>
// // //   );
// // // };
// // // export default Home;



// // import { useEffect, useState } from "react";
// // import MovieCard from "../components/MovieCard";
// // import NavBar from "../components/NavBar"

// // function Home() {
// // const [movies, setMovies] = useState([])

// // useEffect(() =>{
// //   fetch("http://localhost:4000/movies")
// //   .then(r => r.json())
// //   .then(data => setMovies(data))
// //   .catch(error => console.error(error))
// // }, [])

// // const movieList = movies.map(movie => <MovieCard key={movie.id} title={movie.title} id={movie.id}/>)

// //   return (
// //     <>
// //       <header>
// //         <NavBar />
// //       </header>
// //       <main>
// //         <h1>Home Page</h1>
// //         {movieList}
// //       </main>
// //     </>
// //   );
// // }

// // export default Home;


// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import NavBar from "../components/NavBar";

// function Movie() {
//   const [movie, setMovie] = useState({});
//   const params = useParams();
//   const movieId = params.id;

//   useEffect(() =>{
//     fetch(`http://localhost:4000/movies/${movieId}`)
//     .then(r => r.json())
//     .then(data => setMovie(data))
//     .catch(error => console.error(error))
//   }, [movieId]);
  
//   if(!movie.title){
//     return <h1>Loading...</h1>
//   }

//   const genres = movie.genres.map(genre => <span key={genre}>{genre}</span>);

//   return (
//     <>
//       <header>
//         <NavBar />
//       </header>
//       <main>
//         <h1>{movie.title}</h1>
//         <p>{movie.time}</p>
//         {genres}
//       </main>
//     </>
//   );
// }

// export default Movie;



import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:4000/movies")
    .then(r => r.json())
    .then(data => setMovies(data))
    .catch(error => console.error(error))
  }, []);

  const movieList = movies.map(movie => <MovieCard key={movie.id} title={movie.title} id={movie.id}/>);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movieList}
      </main>
    </>
  );
}

export default Home;
