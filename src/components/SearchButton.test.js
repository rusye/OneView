import React from "react";
import { shallow } from "enzyme";
import SearchButton from "./SearchButton";

describe("<SearchButton />", () => {
  it("Renders without crashing", () => {
    shallow(<SearchButton />);
  });

  it("should call mock function when button is clicked", () => {
    const mockFn = jest.fn();
    // The onClick is throwing an error, doesn't like the setup
    const tree = shallow(<SearchButton name="button test" onClick={mockFn} />);
    tree.simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });
});
