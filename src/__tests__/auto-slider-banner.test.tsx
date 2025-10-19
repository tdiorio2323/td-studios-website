import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AutoSliderBanner } from "@/components/AutoSliderBanner";

describe("AutoSliderBanner", () => {
  it("renders hero messaging", () => {
    render(<AutoSliderBanner />);
    expect(screen.getByText(/Luxury/i)).toBeInTheDocument();
    expect(screen.getByText(/All in one place/i)).toBeInTheDocument();
  });
});
