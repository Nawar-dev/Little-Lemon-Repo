import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm Validation Tests", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  test("HTML5 validation attributes are applied correctly to input fields", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/date :/i);
    expect(dateInput).toHaveAttribute("required");

    const timeSelect = screen.getByLabelText(/time :/i);
    expect(timeSelect).toHaveAttribute("required");

    const guestsInput = screen.getByLabelText(/number of people :/i);
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");

    const occasionSelect = screen.getByLabelText(/occasion :/i);
    expect(occasionSelect).toHaveAttribute("required");
  });

  test("Submit button is disabled when the form is invalid", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    // تم التعديل هنا للبحث عن الاسم البرمجي الصحيح للزر
    const submitButton = screen.getByRole("button", { name: /submit reservation/i });
    expect(submitButton).toBeDisabled();
  });

  test("Submit button is enabled when the form is valid", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/date :/i);

    const submitButton = screen.getByRole("button", { name: /submit reservation/i });

    fireEvent.change(dateInput, { target: { value: "2026-08-30" } });

    expect(submitButton).toBeEnabled();
  });
});