import React, { Component } from "react";
import { Link } from "react-router-dom";

class Userlist extends Component {
  render() {
    const { id, avatar_url, login, html_url } = this.props.user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          className="round-img"
          style={{ width: "80px" }}
        ></img>
        <h2>{login}</h2>

        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    );
  }
}

export default Userlist;
