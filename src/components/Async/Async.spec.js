import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import Async from "./Async";

jest.mock("axios");

const hits = [
  { id: 1, title: "test 1" },
  { id: 2, title: "test 2" },
];

describe("Async component", () => {
  it("test axios successfull query", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(hits));
    const { getByRole, findAllByRole, queryAllByRole } = render(<Async />);
    expect(queryAllByRole("article")).toHaveLength(0);
    userEvent.click(getByRole("button"));
    const items = await findAllByRole("article");
    expect(items).toHaveLength(2);

    // Additional
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "http://hn.algolia.com/api/v1/search?type=news"
    );
  });

  it("test axios successfull query with 'act' function", async () => {
    const promise = Promise.resolve(hits);
    axios.get.mockImplementationOnce(() => promise);
    const { getByRole, getAllByRole, queryAllByRole } = render(<Async />);
    expect(queryAllByRole("article")).toHaveLength(0);
    userEvent.click(getByRole("button"));
    await act(() => promise);
    expect(getAllByRole("article")).toHaveLength(2);
  });

  it("test axios query with error", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject());
    const { getByRole, findByText, queryByText } = render(<Async />);
    expect(queryByText(/something went wrong/i)).toBeNull();
    userEvent.click(getByRole("button"));
    const text = await findByText(/something went wrong/i);
    expect(text).toBeInTheDocument();
  });
});
