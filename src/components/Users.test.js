import React from "react";
import { shallow } from "enzyme";
import Users from "./Users";

describe("<Users />", () => {
  it("Renders without crashing", () => {
    shallow(<Users />);
  });
});
