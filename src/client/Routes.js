import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import UsersList, { loadData } from "./components/UsersList";
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
    path: "/",
    component: Home,
    exact: true
  },
  {
    loadData,
    path: "/users",
    component: UsersList
  }
];
