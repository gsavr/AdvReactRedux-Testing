import React, { useState } from "react";
import { connect } from "react-redux";
//import { useNavigate } from "react-router-dom";
import * as actions from "actions";
import requireAuth from "components/requireAuth";

const CommentBox = ({ fetchComments, saveComment /* auth */ }) => {
  const [comment, setComment] = useState("");

  /* could use authentication here
   let navigate = useNavigate();

   useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }); */

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // call action creator
    saveComment(comment);
    //Save Comment

    //empty out comment box
    setComment("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add Comment</h4>
        <textarea onChange={handleChange} value={comment} />
        <div>
          <button>Submit comment</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={fetchComments}>
        Fetch Comments
      </button>
    </div>
  );
};

/* function mapStateToProps(state) {
  return { auth: state.auth };
} */

export default connect(
  /* mapStateToProps */ null,
  actions
)(requireAuth(CommentBox));
