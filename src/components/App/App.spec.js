import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("should render 'learn react'", () => {
    const { getByText } = render(<App />);
    const element = getByText(/learn react/i);
    expect(element).toBeInTheDocument();
  });
});
