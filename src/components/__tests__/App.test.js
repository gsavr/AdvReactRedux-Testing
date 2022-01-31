import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

//'it' function is a global function
//using enzyme
//to make sure that wrappedComponent is in the outside scope so all the functinos can use it
let wrappedComponent; //using let because we are reassigning the value or wrappedComponent

beforeEach(() => {
  wrappedComponent = shallow(<App />); //shallow renders only App component and nothing inside it
});

it("shows a comment box", () => {
  expect(wrappedComponent.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrappedComponent.find(CommentList).length).toEqual(1);
});
