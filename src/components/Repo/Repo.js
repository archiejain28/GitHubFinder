import React, { Component } from "react";
import RepoItem from "./Repo.item";

const Repo = (props) => {
  console.log(props.repos);
  return props.repos.map((repo) => {
    return <RepoItem repo={repo} key={repo.id} />;
  });
};

export default Repo;
