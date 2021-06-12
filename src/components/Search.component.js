import React, { Component, propTypes } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something");
    } else {
      this.props.SearchUsers(this.state.text);
      this.setState({
        text: "",
      });
    }
  };

  Clear = (e) => {
    e.preventDefault();
    this.props.ClearUsers();
  };

  render() {
    return (
      <form className="form">
        <input
          type="text"
          name="text"
          placeholder="Search here"
          value={this.state.text}
          onChange={this.onChange}
        ></input>
        <button
          type="submit"
          className="btn btn-block btn-dark"
          onClick={this.onSubmit}
        >
          Search
        </button>
        {this.props.showClear && (
          <button
            type="submit"
            className="btn btn-block btn-light"
            onClick={this.Clear}
          >
            Clear
          </button>
        )}
      </form>
    );
  }
}

export default Search;
