import React from "react";
import { mount } from "enzyme";
import moxios from "moxios"; //helps axios run in test environment only
import Root from "Root";
import App from "components/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    //interceps requests to this url, send status 200, with fake comments
    status: 200,
    response: [
      { name: "fhskjfhslkdhgkljs" },
      { name: "fhskjfhslkdhgk2" },
      { name: "fhskjfhslkdhgkl34" },
      { name: "fhskjfhslkdhgk3" },
    ],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", (done) => {
  //Atempt to render entire app // not passing initial state this time
  const wrappedComponent = mount(
    <Root>
      <App />
    </Root>
  );
  //find the fetchComments button and click it
  wrappedComponent.find(".fetch-comments").simulate("click");
  //introduce a pause to let the moxios request to go through
  moxios.wait(() => {
    wrappedComponent.update(); //to make sure that li's render
    //Expect to find a list of comments
    expect(wrappedComponent.find("li").length).toEqual(4);

    done(); //this will make sure that jest actually runs everything and set the timer
    wrappedComponent.unmount();
  });
});
