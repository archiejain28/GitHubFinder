import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Repo from "./Repo/Repo";

class UserProfile extends Component {
  componentDidMount() {
    this.props.profile(this.props.match.params.login);
    this.props.userRepo(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    profile: PropTypes.func.isRequired,
    repo: PropTypes.array.isRequired,
  };
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      vlog,
      company,
    } = this.props.user;

    const loading = this.props.loading;
    const repos = this.props.repo;
    if (loading) {
      return <h1>Loading....</h1>;
    } else {
      return (
        <Fragment>
          <Link to="/" className="btn btn-light">
            Back to Search
          </Link>
          Hireable:
          {hireable ? (
            <i className="fas fa-check text-success"></i>
          ) : (
            <i className="fas fa-times-circle text-danger"></i>
          )}
          <div className="card grid-2">
            <div className="all-center">
              <img
                src={avatar_url}
                className="round-img"
                style={{ width: "60px" }}
                alt=""
              ></img>
              <h1>{name}</h1>
              <p>Location: {Location}</p>
            </div>
            <div>
              {bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a href={html_url} className="btn btn-dark my-1">
                {" "}
                Visit GitHub Profile
              </a>
              <ul>
                <li>
                  {login && (
                    <Fragment>
                      <strong>Username: </strong> {login}
                    </Fragment>
                  )}
                </li>
                <li>
                  {company && (
                    <Fragment>
                      <strong>Company: </strong> {company}
                    </Fragment>
                  )}
                </li>
                <li>
                  {blog && (
                    <Fragment>
                      <strong>Website: </strong> {blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-danger">
              Public_repos: {public_repos}
            </div>
            <div className="badge badge-dark">Public_gist: {public_gists}</div>
          </div>
          <Repo repos={repos} />
        </Fragment>
      );
    }
  }
}

export default UserProfile;
