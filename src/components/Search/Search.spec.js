import { render, screen } from "@testing-library/react";
import Search from "./Search";

describe("Search component", () => {
  it("Should render text 'Search'", () => {
    render(<Search />);
    const text = /Search:/i;
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByLabelText("Search:")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByAltText("Search image")).toBeInTheDocument();
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });
});