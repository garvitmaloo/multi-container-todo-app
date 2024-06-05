import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";

import Home from "../Home";

describe("Tests for Home screen", () => {
  it("should render the home screen correctly", () => {
    const { getByText } = render(<Home />);
    const homePageHeadingElement = getByText("Home Page");

    expect(homePageHeadingElement).toBeTruthy();
  });
});
