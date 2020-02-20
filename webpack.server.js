const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  // webpackNodeExternals: anything inside the node modules folder dont bundle to server js, so when we start webpack can be faster
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
