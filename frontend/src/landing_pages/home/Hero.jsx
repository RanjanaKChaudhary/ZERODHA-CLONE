import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom";
import Hero from "../landing_pages/home/Hero";

describe("Hero Component", () => {

  test("renders hero heading", () => {
    render(<Hero />);
    const heading = screen.getByText("Invest in everything");
    expect(heading).toBeInTheDocument();
  });

  
});
