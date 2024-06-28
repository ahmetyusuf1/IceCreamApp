import { render, screen } from "@testing-library/react";
import Scoops from ".";
import userEvent from "@testing-library/user-event";

test("Data from the API is rendered as cards on the screen", async () => {
  render(<Scoops />);

  const images = await screen.findAllByAltText("ice-cream");

  expect(images.length).toBeGreaterThanOrEqual(1);
});

test("Effect of adding and resetting types on the total price", async () => {
  const user = userEvent.setup();

  render(<Scoops />);

  const addButtons = await screen.findAllByRole("button", { name: "Add" });
  const resetButtons = await screen.findAllByRole("button", { name: "Reset" });

  const totalPrice = screen.getByTestId("total");

  expect(totalPrice.textContent).toBe("0");

  await user.click(addButtons[0]);

  expect(totalPrice.textContent).toBe("2");

  await user.dblClick(addButtons[1]);

  expect(totalPrice.textContent).toBe("6");

  await user.click(resetButtons[0]);

  expect(totalPrice.textContent).toBe("4");

  await user.click(resetButtons[1]);

  expect(totalPrice.textContent).toBe("0");
});
