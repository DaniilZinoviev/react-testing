import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    //fireEvent.click(checkbox);
    // userEvent.click(checkbox, { altKey: true, ctrlKey: true })
    userEvent.click(checkbox, { shiftKey: true });
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

  it("double click", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <input type="checkbox" data-testid="simple-input" onChange={onChange} />
    );
    const checkbox = getByTestId("simple-input");
    expect(onChange).not.toHaveBeenCalled();
    userEvent.dblClick(checkbox);
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it('tab navigating', () => {
    const { getAllByTestId } = render(
      <div>
        <input data-testid="element" type="checkbox"/>
        <input data-testid="element" type="radio"/>
        <input data-testid="element" type="number"/>
      </div>
    );
    const [ checkbox, radio, number ] = getAllByTestId('element');
    userEvent.tab();
    expect(checkbox).toHaveFocus();
    userEvent.tab();
    expect(radio).toHaveFocus();
    userEvent.tab();
    expect(number).toHaveFocus();
  })
});
