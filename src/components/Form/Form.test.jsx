import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";
import userEvent from "@testing-library/user-event";

test("Button activation based on approval of the conditions", async () => {
  const user = userEvent.setup();

  render(<Form />);
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  expect(checkbox).not.toBeChecked();

  expect(button).toBeDisabled();

  await user.click(checkbox);

  expect(button).toBeEnabled();

  await user.click(checkbox);

  expect(button).toBeDisabled();
});

test("A notification appears when hovering over the confirmation button.", async () => {
  const user = userEvent.setup();

  render(<Form />);

  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  const popup = screen.getByText(/deliver/i);

  await user.click(checkbox);

  expect(popup).not.toBeVisible();

  fireEvent.mouseEnter(button);

  expect(popup).toBeVisible();

  fireEvent.mouseLeave(button);

  expect(popup).not.toBeVisible();
});
