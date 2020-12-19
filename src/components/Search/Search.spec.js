import { render, screen } from "@testing-library/react";
import Search from "./Search";

describe("Search component", () => {
  // it("Should render text 'Search'", () => {
  //   render(<Search />);
  //   const text = /Search:/i;
  //   expect(screen.getByText(text)).toBeInTheDocument();
  //   expect(screen.getByRole("textbox")).toBeInTheDocument();
  //   expect(screen.getByLabelText("Search:")).toBeInTheDocument();
  //   expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  //   expect(screen.getByAltText("Search image")).toBeInTheDocument();
  //   expect(screen.getByDisplayValue("")).toBeInTheDocument();
  // });

  it("image should be fluid", async () => {
    render(<Search />);
    expect(screen.getByAltText("Search image")).toHaveClass("img-fluid");
  });

  it('should have non-required search input', () => {
    render(<Search />);

    expect(screen.getByLabelText(/search/i)).not.toBeRequired();
  });

  it('should be empty', () => {
    render(<Search />);

    expect(screen.getByAltText(/search/i)).toBeEmptyDOMElement();
    expect(screen.getByAltText(/search/i)).toHaveAttribute('id');
  })
});
