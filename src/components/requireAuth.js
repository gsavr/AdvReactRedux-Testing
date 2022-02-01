//using ONLY HOOKS

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default (ChildComponent) => {
  const ComposedComponent = (props) => {
    const isLoggedIn = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
      if (!isLoggedIn) {
        navigate("/");
      }
    });

    return <ChildComponent {...props} />;
  };

  return ComposedComponent;
};

/* USING CONNECT FUNCTION REDUX -------------------
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

export default (ChildComponent) => {
  const ComposedComponent = (props) => {
    const { auth } = props;
    const navigate = useNavigate();

    useEffect(() => {
      if (!auth) {
        navigate("/");
      }
    });

    return <ChildComponent {...props} />;
  };

  const mapStateToProps = (state) => {
    return { auth: state.auth };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
 */
