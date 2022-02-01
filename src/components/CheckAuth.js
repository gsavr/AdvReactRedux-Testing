import React, { useEffect } from "react";
import { connect } from "react-redux";

export default (ChildComponent) => {
  const ComposedComponent = (props) => {
    const { authenticated, history } = props;

    useEffect(() => {
      if (!authenticated) history.push("/");
    }, [authenticated, history]);

    return <ChildComponent props={props} />;
  };

  const mapStateToProps = (state) => ({
    authenticated: state.auth.authenticated,
  });

  return connect(mapStateToProps)(ComposedComponent);
};
