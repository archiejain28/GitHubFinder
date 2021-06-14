import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar.component";
import About from "./components/About.component";
import Users from "./components/users/users.component";
import Search from "./components/Search.component";
import Alert from "./components/layout/Alert.component";
import axios from "axios";
import UserProfile from "./components/userProfile.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    users: [],
    loading: false,
    Alert: null,
    user: {},
    repo: [],
  };

  onSearch = async (text) => {
    this.setState({
      loading: true,
    });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    console.log(res.data);
    this.setState({
      users: res.data.items,
      loading: false,
    });
  };

  getUser = async (username) => {
    this.setState({
      loading: true,
    });
    const res = await axios.get(`https://api.github.com/users/${username}`);
    this.setState({
      user: res.data,
      loading: false,
    });
  };

  userRepo = async (username) => {
    this.setState({
      loading: true,
    });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );
    this.setState({
      repo: res.data,
      loading: false,
    });
  };

  onClear = () => {
    this.setState({
      users: [],
    });
  };

  setAlert = (text) => {
    this.setState({ Alert: text });

    setTimeout(() => {
      this.setState({
        Alert: null,
      });
    }, 5000);
  };

  render() {
    // const { users, user, Alert, loading } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert Alert={this.state.Alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return (
                    <Fragment>
                      <Search
                        SearchUsers={this.onSearch}
                        ClearUsers={this.onClear}
                        showClear={this.state.users.length > 0 ? true : false}
                        setAlert={this.setAlert}
                      />
                      <Users
                        loading={this.state.loading}
                        users={this.state.users}
                      />
                    </Fragment>
                  );
                }}
              />
              <Route
                exact
                path="/user/:login"
                render={(props) => {
                  return (
                    <UserProfile
                      {...props}
                      profile={this.getUser}
                      userRepo={this.userRepo}
                      user={this.state.user}
                      repo={this.state.repo}
                      loading={this.state.loading}
                    />
                  );
                }}
              ></Route>
              <Route path="/about" component={About}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
