import React from "react";
import Userlist from "./users.list.component";

const Users = ({ loading, users }) => {
  if (loading) {
    return <div>Loading ...</div>;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => {
          return <Userlist key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
