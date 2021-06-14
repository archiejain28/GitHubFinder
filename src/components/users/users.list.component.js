import React from "react";
import { Link } from "react-router-dom";

const Userlist = (props) => {
  const { avatar_url, login } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        style={{ width: "80px" }}
        alt=""
      ></img>
      <h2>{login}</h2>

      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
        More
      </Link>
    </div>
  );
};

export default Userlist;
