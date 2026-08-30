import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the Choose date label in BookingForm", () => {

  const mockAvailableTimes = ["17:00", "18:00"];
  const mockDispatch = jest.fn();

  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />,
  );

  
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});
