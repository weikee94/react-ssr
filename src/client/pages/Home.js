import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Home extends Component {
  render() {
    console.log("HI");

    return (
      <div>
        <Helmet>
          <title>Homes</title>
          <meta property="og:title" content="Users Homes" />
        </Helmet>
        Homes
      </div>
    );
  }
}

export default { component: Home };
