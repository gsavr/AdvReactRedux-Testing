import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "actions";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

const App = ({ auth, changeAuth }) => {
  const renderButton = () => {
    //console.log(auth);
    if (auth) {
      return (
        <button
          onClick={() => {
            changeAuth(false);
          }}
          type="button"
          className="btn btn-secondary"
        >
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            changeAuth(true);
          }}
          type="button"
          className="btn btn-secondary"
        >
          Sign In
        </button>
      );
    }
  };

  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Comments</Link>
        </li>
        <li>
          <Link to="/post">Post Comment</Link>
        </li>
        <li>{renderButton()}</li>
      </ul>
    );
  };

  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <div>{renderHeader()}</div>
          <Routes>
            <Route exact path="/" element={<CommentList />} />
            <Route path="/post" element={<CommentBox />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
