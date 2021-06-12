import React, { Component } from "react";
import Userlist from "./users.list.component";

class Users extends Component {
  render() {
    if (this.props.loading) {
      return <div>Loading ...</div>;
    } else {
      return (
        <div style={userStyle}>
          {this.props.users.map((user) => {
            return <Userlist key={user.id} user={user} />;
          })}
        </div>
      );
    }
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
