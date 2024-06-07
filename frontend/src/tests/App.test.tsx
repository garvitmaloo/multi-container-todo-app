import React from "react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "../App";

const queryClient = new QueryClient();

describe("Tests for <App /> element", () => {
  it("should render Home screen for the default route", () => {
    const { queryByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </MemoryRouter>,
    );

    const homePageHeading = queryByText(/your todos/i);
    expect(homePageHeading).toBeTruthy();
  });
});
