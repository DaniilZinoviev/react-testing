import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("should render 'learn react'", () => {
    const { getByText } = render(<App />);
    const element = getByText(/learn react/i);
    expect(element).toBeInTheDocument();
  });
});

describe("events", () => {
  it("checkbox", () => {
    const handleOnChange = jest.fn();
    const { container } = render(
      <input type="checkbox" onChange={handleOnChange} />
    );
    const checkbox = container.firstChild;
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(handleOnChange).toHaveBeenCalled();
    expect(checkbox).toBeChecked();
  });

  it("input focus", () => {
    const { getByTestId } = render(
      <input type="text" data-testid="simple-input" />
    );
    const input = getByTestId("simple-input");
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});
