

// // // const routes = [
   
// // //   ];

// // // export default routes;


// // // import React from "react";
// // // import { Route } from "react-router-dom";
// // // import Home from "./pages/Home";
// // // import Movie from "./pages/Movie";
// // // import Directors from "./pages/Directors";
// // // import Actors from "./pages/Actors";
// // // import ErrorPage from "./pages/ErrorPage";
// // import Home from "./pages/Home";
// // import Directors from "./pages/Directors";
// // import Actors from "./pages/Actors";
// // import Movie from "./pages/Movie";
// // import ErrorPage from "./pages/ErrorPage";


// // const routes = [

// //   {
// //     path: "/",
// //     element: <Home />,
// //     errorElement: <ErrorPage />
// //   },
// //   {
// //     path: "/directors",
// //     element: <Directors />,
// //     errorElement: <ErrorPage />
// //   },
// //   {
// //     path: "/actors",
// //     element: <Actors />,
// //     errorElement: <ErrorPage />
// //   },
// //   {
// //     path:"/movie/:id",
// //     element: <Movie />,
// //     errorElement: <ErrorPage />
// //   }
// // ];
// // //   <Route key="home" path="/" exact component={Home} />,
// // //   <Route key="movie" path="/movie/:id" component={Movie} />,
// // //   <Route key="directors" path="/directors" component={Directors} />,
// // //   <Route key="actors" path="/actors" component={Actors} />,
// // //   <Route key="error" component={ErrorPage} />,
// // // ];

// // export default routes;



// import Home from "./pages/Home";
// import Movie from "./pages/Movie";
// import Directors from "./pages/Directors";
// import Actors from "./pages/Actors";
// import ErrorPage from "./pages/ErrorPage";

// const routes = [
//     {
//       path: "/",
//       element: <Home />,
//       errorElement: <ErrorPage />
//     },
//     {
//       path: "/movie/:id",
//       element: <Movie />
//     },
//     {
//       path: "/directors",
//       element: <Directors />
//     },
//     {
//       path:"/actors",
//       element: <Actors />
//     }
//   ]

// export default routes;



import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/movie/:id",
      element: <Movie />
    },
    {
      path: "/directors",
      element: <Directors />
    },
    {
      path:"/actors",
      element: <Actors />
    }
];

export default routes;
