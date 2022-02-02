//using ONLY HOOKS

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//ComposedComponent is the Higher Order Component that is requireAuth
export default (ChildComponent) => {
  //ChildComponent will be any component that uses requireAuth to authenticate
  //props to ComposedComponent are coming from the Redux Store, and react router, and whatever other coponent passing props through this component to the one that it will be used on
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
