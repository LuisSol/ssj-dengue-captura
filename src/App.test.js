import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders app without crashing", () => {
  global.matchMedia = jest.fn().mockImplementation(() => ({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    matches: true,
  }));

  const { container } = render(<App />);

  expect(container).toMatchSnapshot();
});
