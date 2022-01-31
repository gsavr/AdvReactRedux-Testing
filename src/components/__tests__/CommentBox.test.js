import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root"; //using Root inorder to make tests run correctly - make Comments independently think that it is running redux

//using fullDOM {mount} for class purposes, could use {shallow} as well

let wrappedComponent;

beforeEach(() => {
  wrappedComponent = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrappedComponent.unmount();
});

it("has a text area and 2 buttons", () => {
  //   console.log(wrappedComponent.find("textarea").length);
  //   console.log(wrappedComponent.find("button").length);

  expect(wrappedComponent.find("textarea").length).toEqual(1);
  expect(wrappedComponent.find("button").length).toEqual(2);
});

describe("the text area", () => {
  //this allows us to write another beforeEach just for these tests to refactor repetetive code
  beforeEach(() => {
    wrappedComponent
      .find("textarea")
      .simulate("change" /* change is actual html name */, {
        target: { value: "new comment" }, //simulates writing in the text area
      });
    wrappedComponent.update(); //rerenders the component
  });

  it("has a text area that users can type in", () => {
    expect(wrappedComponent.find("textarea").prop("value")).toEqual(
      "new comment"
    ); //finds that 'new comment' is written in text area
  });

  it("is submitting text in text area and gets emptied", () => {
    wrappedComponent.find("form").simulate("submit");
    wrappedComponent.update();

    expect(wrappedComponent.find("textarea").prop("value")).toEqual("");
  });
});
