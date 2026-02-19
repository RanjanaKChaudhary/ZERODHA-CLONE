import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom";
import Hero from "../landing_pages/home/Hero";

describe("Hero Component", () => {

  test("renders signup button", () => {
    render(<Hero />);
    const button = screen.getByRole("button", { name: /sign up for free/i });
    expect(button).toBeInTheDocument();
  });

});
