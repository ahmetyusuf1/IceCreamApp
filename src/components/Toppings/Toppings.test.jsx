import { render, screen } from "@testing-library/react";
import Toppings from ".";
import userEvent from "@testing-library/user-event";

test("A card is printed on the screen for data coming from the API", async () => {
  const user = userEvent.setup();

  render(<Toppings />);

  const images = await screen.findAllByAltText("topping-img");

  expect(images.length).toBeGreaterThan(0);
});

test("Adding and removing sauces affects the total price", async () => {
  const user = userEvent.setup();

  render(<Toppings />);

  const totalPrice = screen.getByTestId("totalPrice");

  const toppings = await screen.findAllByRole("checkbox");

  expect(totalPrice.textContent).toBe("0");

  await user.click(toppings[0]);

  expect(totalPrice.textContent).toBe("1");

  await user.click(toppings[1]);

  expect(totalPrice.textContent).toBe("2");

  await user.click(toppings[0]);

  expect(totalPrice.textContent).toBe("1");

  await user.click(toppings[1]);

  expect(totalPrice.textContent).toBe("0");
});
