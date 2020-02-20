import React, { Component } from "react";
import { Helmet } from "react-helmet";

export default class About extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <title>About</title>
            <meta property="og:title" content="Users About"/>
        </Helmet>
        About
      </div>
    );
  }
}
