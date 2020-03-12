import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders app header", () => {
  const { getByText } = render(<App />);
  const header = getByText(/Add Contact Information/i);
  expect(header).toBeInTheDocument();
});
