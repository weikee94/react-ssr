import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore();
  // some logic to init and load data to store
  res.send(renderer(req, store));
});
app.listen(1000, () => {
  console.log("Listen on port 1000");
});
