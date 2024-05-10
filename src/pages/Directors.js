// // // // import { useEffect, useState } from "react";

// // // // function Directors() {
// // // //   return (
// // // //     <>
// // // //       <header>
// // // //         {/* What component should go here? */}
// // // //       </header>
// // // //       <main>
// // // //         {/* Director info here! */}
// // // //       </main>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Directors;


// // // import { useEffect, useState } from "react";

// // // function Directors() {     
  
// // //   const [directorss, setDirectors] = useState([]);

 
// // //   useEffect(() => {
    
// // //     fetch("http://localhost:3000/directors")
// // //       .then(response => response.json())
// // //       .then(data => setDirectors(data))
// // //       .catch(error => console.error("Error fetching directors: ", error));
// // //   }, []);


// // //   return (
// // //     <>
// // //       <header>
// // //         <h1>Directors Page</h1>
// // //       </header>
// // //       <main>
// // //         {directors.map((director, index) => (
// // //           <article key={index}>
// // //             <h2>{director.name}</h2>
// // //             <ul>
// // //               {director.movies.map((movie, index) => (
// // //                 <li key={index}>{movie}</li>
// // //               ))}
// // //             </ul>
// // //           </article>
// // //         ))}
// // //       </main>
// // //     </>
// // //   );
// // // };

// // // export default Directors;




// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";

// // function Directors() {
// //   const [directors, setDirectors] = useState([])

// //   useEffect(() =>{
// //     fetch("http://localhost:4000/directors")
// //     .then(response => response.json())
// //     .then(data => setDirectors(data))
// //   }, [])
// //   return (
// //     <>
// //       <header>
// //         {/* What component should go here? */}
// //         <Link to="/">Home</Link>
// //         <h1>Directors Page</h1>
// //       </header>
// //       <main>
// //         {/* Director info here! */}
// //         {directors.map(director => (
// //           <article key={director.id}>
// //             <h2>{director.name}</h2>
// //             <ul>
// //               {director.movies.map(movieTitle => (
// //                 <li key={movieTitle}>{movieTitle}</li>
// //               ))}
// //             </ul>
// //           </article>
// //         ))}
// //       </main>
// //     </>
// //   );
// // };
// // export default Directors;



// import { useEffect, useState } from "react";
// import Card from "../components/MovieCard";
// import NavBar from "../components/NavBar";

// function Directors() {
//   const [directors, setDirectors] = useState([])

//   useEffect(() =>{
//     fetch("http://localhost:4000/directors")
//     .then(r => r.json())
//     .then(data => setDirectors(data))
//     .catch(error => console.error(error))
//   }, [])

//   const directorList = directors.map(director => <Card key={director.id} name={director.name} movies={director.movies} />)

//   return (
//     <>
//       <header>
//         <NavBar />
//       </header>
//       <main>
//         <h1>Directors Page</h1>
//         {directorList}
//       </main>
//     </>
//   );
// }

// export default Directors;


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
