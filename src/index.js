import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import { loadData } from "./client/components/UsersList";
const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore();

  // some logic to init and load data to store
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});
app.listen(1000, () => {
  console.log("Listen on port 1000");
});
