
import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import App from "./App";

afterEach(() => {
  cleanup();
});

test("renders Vikas heading", () => {
  render(<App />);

  const heading = screen.getByRole("heading", {
    level: 1,
    name: /vikas kumar new code000/i,
  });

  expect(heading).toBeInTheDocument();
});

test("renders branch heading", () => {
  render(<App />);

  const heading = screen.getByRole("heading", {
    level: 2,
    name: /react github action branch 2222/i,
  });

  expect(heading).toBeInTheDocument();
});