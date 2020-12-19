import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

describe("Search component", () => {
  it("image should be fluid", async () => {
    render(<Search />);
    expect(screen.getByAltText("Search image")).toHaveClass("img-fluid");
  });

  it("should have non-required search input", () => {
    render(<Search />);

    expect(screen.getByLabelText(/search/i)).not.toBeRequired();
  });

  it("should be empty", () => {
    render(<Search />);

    expect(screen.getByAltText(/search/i)).toBeEmptyDOMElement();
  });

  it("(fireEvent) should updates after input change", () => {
    render(<Search />);
    const input = screen.getByLabelText(/search/i);
    expect(input).toHaveValue("");
    // fireEvent.change(input, {
    //   target: { value: 'testing' }
    // });
    userEvent.type(input, "testing");
    expect(input).toHaveValue("testing");
  });
});
