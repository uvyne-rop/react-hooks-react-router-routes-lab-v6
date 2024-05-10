// // // // // import { useEffect, useState } from "react";

// // // // // function Actors() {
// // // // //   return (
// // // // //     <>
// // // // //       <header>
// // // // //         {/* What component should go here? */}
// // // // //       </header>
// // // // //       <main>
// // // // //         {/* Actor info here! */}
// // // // //       </main>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Actors;


// // // // // Actors.js
// // // // import React, { useEffect, useState } from "react";

// // // // function Actors() {

// // // //   const [actors, setActors] = useState([]);

 
// // // //   useEffect(() => {
    
// // // //     fetch("http://localhost:3000/actors")
// // // //       .then(response => response.json())
// // // //       .then(data => setActors(data))
// // // //       .catch(error => console.error("Error fetching actors: ", error));
// // // //   }, []);

  
// // // //   return (
// // // //     <>
// // // //       <header>
// // // //         <h1>Actors Page</h1>
// // // //       </header>
// // // //       <main>
// // // //         {actors.map((actor, index) => (
// // // //           <article key={index}>
// // // //             <h2>{actor.name}</h2>
// // // //             <ul>
// // // //               {actor.movies.map((movie, index) => (
// // // //                 <li key={index}>{movie}</li>
// // // //               ))}
// // // //             </ul>
// // // //           </article>
// // // //         ))}
// // // //       </main>
// // // //     </>
// // // //   );
// // // // }

// // // // export default Actors;


// // // import React from "react";
// // // import { actors } from "../data";
// // // function Actors() {
// // //  const displayActors = actors.map(actor => {
// // //   // return <div>
// // //   return <div key={actor.name}>
// // //             <h1>Name: {actor.name}</h1>
// // //                {/* Movies: <ul> */}
// // //                Movies: <ul key={actor.movies}>
// // //                         <li>{actor.movies[0]}</li>
// // //                         <li>{actor.movies[1]}</li>
// // //                         <li>{actor.movies[2]}</li>
// // //                       </ul>  
// // //          </div>
// // //  })
// // //   return <div>
// // //     <h1>Actors Page</h1>
// // //     <div>{displayActors}</div>
// // //   </div>;
// // // }

// // // export default Actors;



// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";

// // function Actors() {
// //   const [actors, setActors]= useState([])

// //   useEffect(() =>{
// //     fetch("http://localhost:4000/actors")
// //     .then(response => response.json())
// //     .then(data =>setActors(data))
// //   }, [])
// //   return (
// //     <>
// //       <header>
// //       <Link to="/">Home</Link>
// //         {/* What component should go here? */}
// //         <h1>Actors Page</h1>
// //       </header>
// //       <main>
// //         {/* Actor info here! */}
// //         {actors.map(actor => (
// //           <article key={actor.id}>
// //             <h2>{actor.name}</h2>
// //             <ul>
// //               {actor.movies.map((movie, index) => (
// //                 <li key={index}>{movie}</li>
// //               ))}
// //             </ul>
// //           </article>
// //         ))}
// //       </main>
// //     </>
// //   );
// // };
// // export default Actors;


// import { useEffect, useState } from "react";
// import Card from "../components/MovieCard";
// import NavBar from "../components/NavBar";

// function Actors() {
//   const [actors, setActors] = useState([])

//   useEffect(() =>{
//     fetch("http://localhost:4000/actors")
//     .then(r => r.json())
//     .then(data => setActors(data))
//     .catch(error => console.error(error))
//   }, [])

//   const actorList = actors.map(actor => <Card key={actor.id} name={actor.name} movies={actor.movies} />)

//   return (
//     <>
//       <header>
//         <NavBar />
//       </header>
//       <main>
//         <h1>Actors Page</h1>
//         {actorList}
//       </main>
//     </>
//   );
// }

// export default Actors;



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
