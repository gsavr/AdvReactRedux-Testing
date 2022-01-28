import React from "react";
//import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

//'it' function is a global function

it("shows a comment box", () => {
  /* const div = document.createElement("div");

  //ReactDOM.render(<App />, div); //this just shows that the App renders

  //you can also look inside this div and check for anything that should be rendering

  //console.log(div.innerHTML);//see if the comment box and list exist
  //expect(div.innerHTML).toContain("Comment Box"); //this has inside knowledge of another component - so it is not good

  //ReactDOM.unmountComponentAtNode(div); //cleanup after the test */
  //using enzyme - do not need reactDOM
  const wrappedComponent = shallow(<App />); //shallow renders only App component and nothing inside it

  expect(wrappedComponent.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  const wrappedComponent = shallow(<App />);

  expect(wrappedComponent.find(CommentList).length).toEqual(1);
});
