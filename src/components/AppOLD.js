import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "actions";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

class App extends Component {
  renderButton() {
    //console.log(this.props.auth);
    if (this.props.auth) {
      return (
        <button
          onClick={() => {
            this.props.changeAuth(false);
          }}
        >
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            this.props.changeAuth(true);
          }}
        >
          Sign In
        </button>
      );
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Comments</Link>
        </li>
        <li>
          <Link to="/post">Post Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <div>{this.renderHeader()}</div>
            <Routes>
              <Route exact path="/" element={<CommentList />} />
              <Route path="/post" element={<CommentBox />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
