// // // // // import { useEffect, useState } from "react";

// // // // // function Movie() {
// // // // //   return (
// // // // //     <>
// // // // //       <header>
// // // // //         {/* What component should go here? */}
// // // // //       </header>
// // // // //       <main>
// // // // //         {/* Movie info here! */}
// // // // //       </main>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Movie;


// // // // import { useEffect, useState } from "react";
// // // // import { useParams } from "react-router-dom";

// // // // function Movie() {
// // // //   const { id } = useParams();
// // // //   const [movie, setMovie] = useState(null);

// // // //   useEffect(() => {
// // // //     // Fetch movie data based on the id parameter
// // // //     // Example:
// // // //     fetch(`http://localhost:3000/movies`)
// // // //       .then(response => response.json())
// // // //       .then(data => setMovie(data))
// // // //       .catch(error => console.error("Error fetching movie: ", error));

// // // //     // For testing purposes, you can set a mock movie
// // // //     const mockMovie = {
// // // //       title: "Sample Movie",
// // // //       time: "120 mins",
// // // //       genres: ["Action", "Adventure", "Sci-Fi"]
// // // //     };
// // // //     setMovie(mockMovie);
// // // //   }, [id]);

// // // //   return (
// // // //     <>
// // // //       <header>
// // // //         {/* Navbar or any other header component */}
// // // //       </header>
// // // //       <main>
// // // //         {movie ? (
// // // //           <div>
// // // //             <h1>{movie.title}</h1>
// // // //             <p>Time: {movie.time}</p>
// // // //             <div>
// // // //               Genres:{" "}
// // // //               {movie.genres.map(genre => (
// // // //                 <span key={genre}>{genre}</span>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         ) : (
// // // //           <p>Loading...</p>
// // // //         )}
// // // //       </main>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Movie;


// // // import React from "react";
// // // import { movies } from "";
// // // function Movies() {
// // //   const displaymovies = movies.map(movie => {
// // //     return <div><h1> title :{movie.title}</h1>
// // //                 <p>time :{movie.time}</p>
// // //     return <div key={movie.title}>
// // //              <h2> title :{movie.title}</h2>
// // //                 <h3>time :{movie.time}</h3>
// // //                  genres:<ul>
// // //                            <li>{movie.genres[0]}</li>
// // //                            <li>{movie.genres[1]}</li>
// // //                            <li>{movie.genres[2]}</li>
// // //                            {movie.genres.map((genre)=>(
// // //                            <li key={genre}>{genre}</li>
// // //                           ))}
// // //                         </ul>
// // //          </div>
// // //           </div>
// // //   })
// // //   return <div>
// // //     <h1>Movies Page</h1>
// // //     <div>
// // //       {displaymovies}
// // //     </div>
// // //   </div>;
// // // }

// // // export default Movies;





// // import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import NavBar from "../components/NavBar";

// // function Movie() {
// //   const [movie, setMovie]= useState({})
// //   const params = useParams()
// //   const movieId = params.id;

// //   useEffect(() =>{
// //     fetch(`http://localhost:4000/movies/${movieId}`)
// //     .then(response => response.json())
// //     .then(data => setMovie(data))
// //     .catch(error => console.error(error));
// //   }, [movieId]);


// //   return (
// //     <>
// //       <header>
// //         {/* What component should go here? */}
// //         <NavBar />
// //       </header>
// //       <main>
// //         {/* Movie info here! */}
// //         {Object.keys(movie).length === 0 ? (
// //           <h1>Loading...</h1>
// //         ) : (
// //           <>
// //             <h1>{movie.title}</h1>
// //             <p>Duration: {movie.time} minutes</p>
// //             <div>
// //               Genres:
// //               <ul>
// //                 {movie.genres.map((genre, index) => (
// //                   <li key={index}>{genre}</li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </>
// //         )}
// //       </main>
// //     </>
// //   );
// // };
// // export default Movie;




// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"
// import NavBar from "../components/NavBar";


// function Movie() {
//   const [movie, setMovie] = useState({})
//   const params = useParams();
//   const movieId = params.id

//   useEffect(() =>{
//     fetch(`http://localhost:4000/movies/${movieId}`)
//     .then(r => r.json())
//     .then(data => setMovie(data))
//     .catch(error => console.error(error))
//   }, [movieId])
  
//   if(!movie.title){
//     return <h1>Loading...</h1>
//   }

//   const genres = movie.genres.map(genre => <span key={genre}>{genre}</span>)

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
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const movieId = params.id;

  useEffect(() =>{
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(r => r.json())
    .then(data => setMovie(data))
    .catch(error => console.error(error))
  }, [movieId]);
  
  if(!movie.title){
    return <h1>Loading...</h1>
  }

  const genres = movie.genres.map(genre => <span key={genre}>{genre}</span>);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {genres}
      </main>
    </>
  );
}

export default Movie;
