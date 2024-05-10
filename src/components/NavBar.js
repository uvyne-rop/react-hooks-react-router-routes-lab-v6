// // // // // import { NavLink } from "react-router-dom";
// // // // // import "./NavBar.css";

// // // // // function NavBar() {
// // // // //   return (
// // // // //     <nav className="navbar">
    
// // // // //     </nav>
// // // // //     );
// // // // // };

// // // // // export default NavBar;


// // // // import { NavLink } from "react-router-dom";
// // // // import "./NavBar.css";

// // // // function NavBar() {
// // // //   return (
// // // //     <nav className="navbar">
// // // //       <NavLink exact to="/" activeClassName="active">Home</NavLink>
// // // //       <NavLink to="/directors" activeClassName="active">Directors</NavLink>
// // // //       <NavLink to="/actors" activeClassName="active">Actors</NavLink>
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default NavBar;

// // // import React from "react";
// // // import { NavLink } from "react-router-dom";
// // // function NavBar() {
// // //   // return <div>
// // //   return <div className="navbar">
// // //     <NavLink to = "/" exact > Home </NavLink>
// // //     <NavLink to = "/movies" exact > movies </NavLink>
// // //     <NavLink to = "/directors" exact > directors </NavLink>
// // //     <NavLink to = "/actors" exact > actors </NavLink>
// // //     <NavLink to = "/movies" exact > Movies </NavLink>
// // //     <NavLink to = "/directors" exact > Directors </NavLink>
// // //     <NavLink to = "/actors" exact > Actors </NavLink>
// // //   </div>;
// // // }

// // // export default NavBar;
// // import { NavLink } from "react-router-dom";
// // import "./NavBar.css";

// // function NavBar() {
// //   return (
    

// //     <nav>
// //       <NavLink
// //         to="/"
// //         className="navbar">
// //         Home
// //       </NavLink>
// //       <NavLink
// //         to="/directors"
// //         className="navbar">
// //         Directors
// //       </NavLink>
// //       <NavLink
// //         to="/actors"
// //         className="navbar">
// //         Actors
// //       </NavLink>
// //     </nav>
    
// //   );
// // };

// // export default NavBar;


// import { NavLink } from "react-router-dom";

// function NavBar() {
//   return (
//     <nav className="navbar">
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/directors">Directors</NavLink>
//       <NavLink to="/actors">Actors</NavLink>
//     </nav>
//     );
// }

// export default NavBar;



import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </nav>
  );
}

export default NavBar;
