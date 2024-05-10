// // // import "./index.css";
// // // import ReactDOM from "react-dom/client";
// // // import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // // import routes from "./routes";

// // // const root = ReactDOM.createRoot(document.getElementById("root"));
// // // root.render();
// // import "./index.css";
// // import ReactDOM from "react-dom";
// // import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import routes from "./routes";

// // const BrowserRouter = createBrowserRouter();

// // ReactDOM.render(
// //   <BrowserRouter>
// //     <RouterProvider routes={routes}>
// //       <App />
// //     </RouterProvider>
// //   </BrowserRouter>,
// //   // document.getElementById("root")
// // );


// import React from "react";
// import { directors } from "../data";
// function Directors() {
//  const   displayDirectors = directors.map(director => {
    
//     return <div key={director.name}>
//            <h2>Name:{director.name}</h2>
//             {/* Movies <ul> 
//                      <li>{director.movies[0]}</li>
//                      <li>{director.movies[1]}</li>
//                      <li>{director.movies[2]}</li> */}
//             Movies <ul >
//                       {director.movies.map((movie)=>(
//                       <li key={movie}>{movie}</li>
//                       ))}
//                    </ul>
//           </div>
           
//    })
//   return <div>
//     <h1>Directors Page</h1>
//     <div>
//       {displayDirectors}
//     </div>
//   </div>;
// }

// export default Directors;
import "./index.css";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);