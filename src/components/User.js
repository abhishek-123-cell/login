import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

export default class User extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let loggedIn = true;

    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
    };
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/user" />;
    }
    return (
      <div>
        <h1>this is an admin page only auth people can see it</h1>
        <Link to="/logout">logout</Link>
      </div>
    );
  }
}
