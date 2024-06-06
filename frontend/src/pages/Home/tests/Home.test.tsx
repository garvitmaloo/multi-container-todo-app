import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";

import Home from "../../Home";

describe("Tests for Home screen", () => {
  it("should render the home screen correctly", () => {
    const { getByText, getByRole } = render(<Home />);
    const homePageHeadingElement = getByText(/Your todos/i);
    const addNewTodoButton = getByRole("button", {
      name: /Add new todo/i,
    });
    const pendingHeadingElement = getByText(/pending/i);
    const completedHeadingElement = getByText(/completed/i);

    expect(homePageHeadingElement).toBeTruthy();
    expect(addNewTodoButton).toBeTruthy();
    expect(pendingHeadingElement).toBeTruthy();
    expect(completedHeadingElement).toBeTruthy();
  });
});
