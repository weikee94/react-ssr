import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import UsersList from "./pages/UsersList";
// import { Route } from "react-router-dom";

// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home}></Route>
//       <Route path="/about" component={About}></Route>
//       <Route path="/users" component={UsersList}></Route>
//     </div>
//   );
// };

export default [
  {
    ...Home,
    path: "/",
    exact: true
  },
  {
    ...UsersList,
    path: "/users"
  }
];
