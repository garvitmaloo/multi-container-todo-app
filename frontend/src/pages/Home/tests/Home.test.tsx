import React from "react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { render } from "../../../utils/test-utils";
import Home from "../../Home";
import { mockAllTodos } from "./mocks";

vi.mock("../queries", () => ({
  fetchAllTodos: () =>
    Promise.resolve({
      error: null,
      result: mockAllTodos,
    }),
}));

describe("Tests for Home screen", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

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

  it("should render one todo card for each todo returned by the API", () => {
    const { queryAllByTestId } = render(<Home />);
    const todoCardWrappers = queryAllByTestId("todo-card-wrapper");
    expect(todoCardWrappers).toHaveLength(2);
  });

  it("should render all the details in a todo card correctly", () => {
    const { queryByText, queryByRole } = render(<Home />);
    const todoCardHeading = queryByText("Todo 1");
    const todoCardDescription = queryByText("Description 1");
    const todoCardDeadline = queryByText(/Deadline - 1 January 2022/i);
    const todoCardButton = queryByRole("button", {
      name: /Mark as done/i,
    });

    expect(todoCardHeading).toBeTruthy();
    expect(todoCardDescription).toBeTruthy();
    expect(todoCardDeadline).toBeTruthy();
    expect(todoCardButton).toBeTruthy();
  });

  it("should render correct text in the button if a todo is pending or completed", () => {
    const { queryAllByRole } = render(<Home />);
    const pendingTodoButton = queryAllByRole("button", {
      name: /Mark as/i,
    });
    const doneTodoButton = queryAllByRole("button", {
      name: "Done",
    });

    expect(pendingTodoButton).toHaveLength(1);
    expect(doneTodoButton).toHaveLength(1);
  });
});
